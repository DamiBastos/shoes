import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../types";
import { productDetail } from "../../api/shoes";
import { addItemToCart } from "../../api/cart"; // Importa la función para agregar al carrito
import "./ProductDetail.css";
import { useUser } from "../../components/UserContext";

interface RouteParams {
  id: string;
  [key: string]: string | undefined; // Agregar firma de índice para permitir cualquier otro parámetro de URL
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [product, setProduct] = useState<Product | null>(null);
  // const [quantity, setQuantity] = useState(1);

  const { user } = useUser(); // Obtener el usuario desde el contexto

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

  const handleAddToCart = async () => {
    try {
      const response = await addItemToCart(product.id, user); // Supongamos que estamos agregando 1 producto
      console.log("Producto agregado al carrito:", response);
      // Puedes mostrar un mensaje al usuario de que el producto fue agregado exitosamente
    } catch (error) {
      console.error("Error al agregar el producto al carrito:", error);
      // Manejar el error, mostrar un mensaje al usuario, etc.
    }
  };

  return (
    <article className="d-flex">
      <section className="w-50">
        <img
          src={`/products/${product.Colors[0]?.color_shoe.image}`}
          alt={product.model}
          width={"500px"}
        ></img>
      </section>
      <section className="d-flex flex-column align-items-start w-50">
        <p className="productDetail text-uppercase fs-2 fw-semibold">
          {product.model}
        </p>
        <p>{product.brand}</p>
        <p className="productDetail text-decoration-line-through">
          ${product.price}
        </p>
        <div className="productDetail d-flex gap-1 align-items-end">
          <p className="productDetail fs-2 fw-semibold">
            ${product.price - (product.price * product.discount) / 100}
          </p>
          <p className="productDetail"> {product.discount}% OFF</p>
        </div>
        <a href="">Ver medios de pago</a>
        <p className="productDetail fw-semibold">Color: 
          {/* {product.color} */}
          </p>
        <p className="productDetail fw-semibold">Talle:
          {/* {product.size} */}
          </p>
        <p>Genero: {product.genre}</p>
        <p>Disponibles: {product.stock}</p>
        <button className="w-100" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
        <p>Descripción: {product.description}</p>
      </section>
    </article>
  );
};

export default ProductDetail;
