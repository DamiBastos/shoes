// CardList.tsx
import React, { useState } from "react";
import Card from "../Card/Card";
import { Product } from "../../../types";
import EditProductModal from "../ProductForms/EditProductModal";

interface CardListProps {
  products: Product[];
}

const CardList: React.FC<CardListProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <section  className="w-100 d-flex flex-wrap align-items-center justify-content-center">
      {products.map((product) => (
        <ul className="d-flex align-items-center justify-content-center" key={product.id}>
          <Card
            id={product.id}
            nombre={product.model}
            marca={product.brand}
            talle={product?.Sizes[0] ? `${product?.Sizes[0]?.number} / ${product?.Sizes[product?.Sizes.length - 1]?.number}` : "Sin definir"}
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
