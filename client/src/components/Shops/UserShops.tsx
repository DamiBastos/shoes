import React, { useEffect } from "react";
import { useUser } from "../UserContext";


const UserShops: React.FC = () => {
    const { user,shopList, fetchShopList } = useUser();

    useEffect(() => {
        if (user && !user.isAdmin) {
          fetchShopList();
        }        
        console.log("shop list: ",shopList);
      }, [user]);

    return (
        <>
        <div>
            Historial de compras: {user?.username}
            <div className="cart-sidebar-body d-flex flex-column justify-content-between border h-75">
        {shopList && shopList.purchase.length > 0 ? (
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

              </tr>
            </thead>
            <tbody>
            {shopList?.purchase.map((shop:any, index: number) => (
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
            <td className="p-1">{shop.ítems.length}</td>
            <td className="p-1">{shop.subtotal}</td>
            <td className="p-1">{shop.total}</td>
                </tr>
            ))
             }</tbody>          
             </table>

            ) : (
                <span>Todavia no hiciste ninguna compra, <a href="/">comienza ahora!</a></span>
            )}
</div>
        </div>
        </>
    )
}

export default UserShops;