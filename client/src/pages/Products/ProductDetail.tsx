import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../types";
import { productDetail } from "../../api/shoes";
import { addItemToCart } from "../../api/cart"; 
import "./ProductDetail.css";
import { useUser } from "../../components/UserContext";
import { formatNumber } from "../../utils/formateNumber";
import Swal from 'sweetalert2'; // Importar SweetAlert2


interface RouteParams {
  id: string;
  [key: string]: string | undefined; 
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [product, setProduct] = useState<Product | null>(null);
  // const [clicked, setClicked] = useState(false);
  // const [selectedSize, setSelectedSize] = useState(35);
  const [selectedSize, setSelectedSize] = useState<number | null>(null); // Cambia el valor inicial a null
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { user, openCart, fetchCart } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      const shoeData = await productDetail(id);
      setProduct(shoeData);
    };
    fetchData();
  }, [id]);
  if (!product) {
    return <div>Cargando...</div>;
  }

  const handleSizeSelect = (selectedSize: number) => {
    setSelectedSize(selectedSize);
    setErrorMessage(null); // Limpiar mensaje de error al seleccionar talle

  };

  const handleAddToCart = async () => {
    if (!user) {
      Swal.fire({
        icon: 'warning',
        title: '¡Atención!',
        text: 'Debes iniciar sesión para agregar productos al carrito.',
        showCancelButton: true,
        confirmButtonText: 'Ir al login',
        cancelButtonText: 'Seguir navegando',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/login'; // Redirigir al login
        }
      });
      return;
    }
    if (!selectedSize) {
      setErrorMessage("Por favor, selecciona un talle antes de agregar al carrito.");
      return;
    }
    try {
      // setClicked(true);
      await addItemToCart(product.id, user?.id, selectedSize);
      await fetchCart()
      openCart(); // Abrir el carrito después de agregar el producto

    } catch (error) {
      console.error("Error al agregar el producto al carrito:", error);
    }
  };

  return (
    <article className="article-detail d-flex">
      <section className="section__img w-50">
        <img
          src={`${product.Colors[0]?.color_shoe.image}`}
          alt={product.model}
        ></img>
      </section>
      <section className="d-flex flex-column align-items-start w-50">
        <p className="productDetail text-uppercase fs-2 fw-semibold">
          {product.model}
        </p>
        <p>{product.brand}</p>
        <div className="productDetail d-flex gap-1 align-items-end">
          <p className="productDetail fs-2 fw-semibold">
            ${formatNumber(product.price) }
          </p>
        </div>
        <div className="productDetail fw-semibold">Color:
          {product.Colors.map((color: any, index: number)=>(
            <p key={index}>{color.name}</p>
          ))}
          </div>
          <div>Talle:</div>
        <p className="productDetail d-flex  gap-1 flex-wrap">
          {product.Sizes?.map((size:any,index:number)=>(
            <button
            key={index}
            className={`d-flex border rounded p-1 ${selectedSize === size ? "selected bg-light text-black" : ""}`}
            onClick={() => handleSizeSelect(size)}
          >
            {size.number}
          </button>
          ))}
          </p>
        <p>Género: {product.genre}</p>
        <p>Stock: {product.stock}</p>
        <button className={`w-100 `}
      onClick={handleAddToCart}
      style={{ color: "white" }}>
          Agregar al carrito
        </button>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}

        <p>Descripción: {product.description}</p>
      </section>
    </article>
  );
};

export default ProductDetail;
