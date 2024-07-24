import React from "react";
import { Modal } from "react-bootstrap";
import EditSale from "./EditSale";
import { Shop } from "../../../types/Shop";

interface EditSaleModalProps {
  show: boolean;
  handleClose: () => void;
  shop: Shop;
}

const EditSaleModal: React.FC<EditSaleModalProps> = ({
  show,
  handleClose,
  shop,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Venta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditSale shop={shop} onClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
};

export default EditSaleModal;
