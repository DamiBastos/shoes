import React, { useState, useEffect } from "react";
import { Shop } from "../../types/Shop";
import { listShops } from "../../api/shops";
import EditSaleModal from "./SaleForms/SalesModal";

const Sales: React.FC = () => {
  const [sales, setSales] = useState<Shop[] | null>(null);
  const [selectedSale, setSelectedSale] = useState<Shop | null>(null);
  const [showModal, setShowModal] = useState(false);

  const fetchSales = async () => {
    const shopsData = await listShops();
    setSales(shopsData.purchases);
  };

  useEffect(() => {
    fetchSales();
  }, []);

  const handleEdit = (sale: Shop) => {
    setSelectedSale(sale);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedSale(null);
    fetchSales(); // Recargar los datos después de cerrar el modal
  };

  return (
    <>
      <div>
        Historial de ventas
        <div className="cart-sidebar-body d-flex flex-column justify-content-between border h-75">
          {sales && sales.length > 0 ? (
            <table className="">
              <thead>
                <tr>
                  <th className="p-1">NOMBRE</th>
                  <th className="p-1">APELLIDO</th>
                  <th className="p-1">C/P</th>
                  <th className="p-1">CIUDAD</th>
                  <th className="p-1">BARRIO</th>
                  <th className="p-1">CALLE</th>
                  <th className="p-1">NÚMERO</th>
                  <th className="p-1">ESTADO ENVÍO</th>
                  <th className="p-1">TIPO DE ENVÍO</th>
                  <th className="p-1">TIPO DE PAGO</th>
                  <th className="p-1">PRODUCTO/S</th>
                  <th className="p-1">SUBTOTAL</th>
                  <th className="p-1">TOTAL</th>
                  <th className="p-1"></th>
                </tr>
              </thead>
              <tbody>
                {sales?.map((shop: any, index: number) => (
                  <tr key={index}>
                    <td className="p-1">{shop.name}</td>
                    <td className="p-1">{shop.lastname}</td>
                    <td className="p-1">{shop.postal_code}</td>
                    <td className="p-1">{shop.city}</td>
                    <td className="p-1">{shop.neighborhood}</td>
                    <td className="p-1">{shop.street}</td>
                    <td className="p-1">{shop.number_street}</td>
                    <td className="p-1">{shop.state_purchase}</td>
                    <td className="p-1">{shop.type_ship}</td>
                    <td className="p-1">{shop.type_payment}</td>
                    <td className="p-1">{shop.items.length}</td>
                    <td className="p-1">{shop.subtotal}</td>
                    <td className="p-1">{shop.total}</td>
                    <td className="p-1">
                      <div className="custom-button">
                        <button
                          className="custom-button border p-1"
                          onClick={() => handleEdit(shop)}
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <span>
              Todavía no hiciste ninguna compra,{" "}
              <a href="/">comienza ahora!</a>
            </span>
          )}
        </div>
      </div>
      {selectedSale && (
        <EditSaleModal
          show={showModal}
          handleClose={handleClose}
          shop={selectedSale}
        />
      )}
    </>
  );
};

export default Sales;
