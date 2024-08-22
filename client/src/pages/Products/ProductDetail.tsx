import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../types";
import { productDetail } from "../../api/shoes";
import { addItemToCart } from "../../api/cart"; 
import "./ProductDetail.css";
import { useUser } from "../../components/UserContext";
import { formatNumber } from "../../utils/formateNumber";

interface RouteParams {
  id: string;
  [key: string]: string | undefined; 
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [product, setProduct] = useState<Product | null>(null);
  const [clicked, setClicked] = useState(false);
  const [selectedSize, setSelectedSize] = useState(35);


  const { user } = useUser(); // Obtener el usuario desde el contexto

  useEffect(() => {
    const fetchData = async () => {
      const shoeData = await productDetail(id);
      setProduct(shoeData);
    };

    fetchData();

    if (clicked) {
      // Redirigir o actualizar la página después de 1 segundo
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }, [id, clicked]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  const handleSizeSelect = (selectedSize: number) => {
    setSelectedSize(selectedSize);
  };

  const handleAddToCart = async () => {
    try {
      setClicked(true);
      await addItemToCart(product.id, user?.id, selectedSize);
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
        <button className={`w-100 ${clicked ? "bg-secondary" : "bg-black"}`}
      onClick={handleAddToCart}
      style={{ color: "white" }}>
          Agregar al carrito
        </button>
        <p>Descripción: {product.description}</p>
      </section>
    </article>
  );
};

export default ProductDetail;
