import React from "react";
import { Modal } from "react-bootstrap";
import EditProduct from "./EditProduct";
import { Product } from "../../../types";

interface EditProductModalProps {
  show: boolean;
  handleClose: () => void;
  product: Product;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  show,
  handleClose,
  product,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size="sm">
      <Modal.Header closeButton>
        <Modal.Title>Editar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditProduct product={product} onClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
};

export default EditProductModal;
