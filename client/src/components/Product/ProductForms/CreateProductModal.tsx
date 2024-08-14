import React from "react";
import { Modal } from "react-bootstrap";
import CreateProduct from "./CreateProduct";

interface CreateProductModalProps {
  show: boolean;
  handleClose: () => void;
}

const CreateProductModal: React.FC<CreateProductModalProps> = ({
  show,
  handleClose,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateProduct onClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
};

export default CreateProductModal;
