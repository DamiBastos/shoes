// src/pages/EditProduct.tsx
import React from "react";
import CreateProductForm from "./CreateProductForm";

interface CreateProductProps {
  onClose: () => void;
}

const CreateProduct: React.FC<CreateProductProps> = ({  onClose }) => {
  return <CreateProductForm  onClose={onClose} />;
};

export default CreateProduct;
