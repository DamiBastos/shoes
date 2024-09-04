// CardList.tsx
import React, { useState } from "react";
import Card from "../Card/Card";
import { Product } from "../../../types";
import EditProductModal from "../ProductForms/EditProductModal";
import "./cardList.css"

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
    <section  className="cardlist__container w-100 d-flex flex-wrap justify-content-around gap-3">
      {products.map((product) => (
        <div className="cardlist__cards" key={product.id}>
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
        </div>
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
