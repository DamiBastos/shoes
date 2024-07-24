// src/pages/EditProduct.tsx
import React from "react";
import { Shop } from "../../../types/Shop";
import EditSaleForm from "./EditSaleForm";

interface EditSaleProps {
  shop: Shop
  onClose: () => void;
}

const EditProduct: React.FC<EditSaleProps> = ({ shop, onClose }) => {
  return <EditSaleForm initialProduct={shop} onClose={onClose} />;
};

export default EditProduct;
