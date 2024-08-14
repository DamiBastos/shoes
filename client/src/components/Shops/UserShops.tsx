import React, { useEffect } from "react";
import { useUser } from "../UserContext";
import { formatNumber } from "../../utils/formateNumber";

const UserShops: React.FC = () => {
  const { user, shopList, fetchShopList } = useUser();

  useEffect(() => {
    if (user && !user.isAdmin) {
      fetchShopList();
    }
    
  }, [user]);

  return (
    <>
      <div>
        <h3> Historial de compras de {user?.username}</h3>
        <div className="cart-sidebar-body d-flex flex-column justify-content-between border h-75">
          {shopList && shopList.purchase.length > 0 ? (
            <table className="">
              <thead>
                <tr>
                  
                  <th className="p-1">CALLE</th>
                  <th className="p-1">NÚMERO</th>
                  <th className="p-1">ESTADO ENVÍO</th>
                  <th className="p-1">ESTADO PAGO</th>
                  <th>PRODUCTOS</th>
                  <th className="p-1">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {shopList?.purchase.map((shop: any, index: number) => (
                  <tr key={index}>
                    <td className="p-1">{shop.street}</td>
                    <td className="p-1">{shop.number_street}</td>
                    <td className="p-1">{shop.state_ship}</td>
                    <td className="p-1">{shop.state_payment}</td>
                    <td className="p-1">{shop.items.map((producto:any, index: number)=>(
                      <div key={index}>
                        <div className="d-flex">
                          {producto.name}
                        </div>
                      </div>
                    ))}</td>
                    <td className="p-1">${formatNumber(shop.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <span>
              Todavia no hiciste ninguna compra, <a href="/">comienza ahora!</a>
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default UserShops;
