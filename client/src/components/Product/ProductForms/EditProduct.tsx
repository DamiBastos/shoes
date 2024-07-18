// src/pages/EditProduct.tsx
import React from "react";
import { Product } from "../../../types";
import EditProductForm from "./EditProductForm";

interface EditProductProps {
  product: Product;
  onClose: () => void;
}

const EditProduct: React.FC<EditProductProps> = ({ product, onClose }) => {
  return <EditProductForm initialProduct={product} onClose={onClose} />;
};

export default EditProduct;
