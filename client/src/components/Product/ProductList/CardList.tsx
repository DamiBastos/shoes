import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { Product } from "../../../types";
import EditProductModal from "../ProductForms/EditProductModal";
import { listShoes } from "../../../api/shoes";

const CardList: React.FC = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const shoesData = await listShoes();
        if (Array.isArray(shoesData)) {
          setProducts(shoesData);
          console.log("Productos en card list", shoesData);
        } else {
          console.log("La respuesta de los datos no es un array", shoesData);
          throw new Error("La respuesta de los datos no es un array");
        }
      } catch (error: any) {
        setError(error.message);
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  if (!products) {
    return <h1>Cargando...</h1>;
  }

  return (
    <section className="d-flex flex-wrap align-items-center justify-content-center">
      {products.map((product) => (
        <ul key={product.id}>
          <Card
            id={product.id}
            nombre={product.model}
            imagen={product.Colors[0]?.color_shoe.image}
            precio={product.price}
            descuento={product.discount}
            cuotas={product.stock}
            openModal={() => handleEdit(product)} // Definir la función openModal aquí
          />
        </ul>
      ))}
      {selectedProduct && (
        <EditProductModal
          show={showModal}
          handleClose={handleClose}
          product={selectedProduct}
        />
      )}
    </section>
  );
};

export default CardList;
