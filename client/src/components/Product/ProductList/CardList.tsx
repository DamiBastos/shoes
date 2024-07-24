import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { Product } from "../../../types";
import EditProductModal from "../ProductForms/EditProductModal";
import { listShoes } from "../../../api/shoes";

const CardList: React.FC = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const shoesData = await listShoes();
      setProducts(shoesData);
    };

    fetchData();
  }, []);

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
            imagen={product.image}
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
