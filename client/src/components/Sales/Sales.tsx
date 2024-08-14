import React, { useState, useEffect } from "react";
import { Shop } from "../../types/Shop";
import { listShops } from "../../api/shops";
import EditSaleModal from "./SaleForms/SalesModal";
import "./sales.css"

const Sales: React.FC = () => {
  const [sales, setSales] = useState<Shop[] | null>(null);
  const [selectedSale, setSelectedSale] = useState<Shop | null>(null);
  const [showModal, setShowModal] = useState(false);

  const fetchSales = async () => {
    const shopsData = await listShops();
    setSales(shopsData);

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
                  <th className="p-1">ESTADO PAGO</th>
                  <th className="p-1">ESTADO ENVÍO</th>
                  <th className="p-1">PRODUCTOS</th>
                  <th className="p-1">TOTAL</th>
                  <th className="p-1">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {sales?.map((shop: any, index: number) => (
                  <tr key={index}>
                    <td className="p-1">{shop.name} {shop.lastname}</td>
                    <td className="p-1">{shop.state_payment}</td>
                    <td className="p-1">{shop.state_ship}</td>
                    <td className="p-1">{shop.items.map((product:any, index:number) => (
                      <div key={index}>
                      <div>
                        Producto: {product.name}
                      </div>
                      <div>
                      Provedor: {product.provider}
                    </div>
                    </div>
                    ))}</td>

                    <td className="p-1">{shop.total}</td>
                    <td className="p-1">
                      <div className="">
                        <button
                          className="rounded-button p-1"
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
            <h2>
              Todavía no hay ventas.{" "}
            </h2>
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
