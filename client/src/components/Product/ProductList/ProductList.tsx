import React, { useState, useEffect } from "react";
// import Card from "../Card/Card";
import { Product } from "../../../types";
import EditProductModal from "../ProductForms/EditProductModal";
import { listShoes, productDelete } from "../../../api/shoes";
import { Color } from "../../../types";

const ProductList: React.FC = () => {
  const [shoes, setShoes] = useState<Product[] | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const shoesData = await listShoes();
      
  //     setShoes(shoesData);
  //   };
  //   fetchData();
    
  // }, []);

  const fetchShoes = async () => {
    const shopsData = await listShoes();
    setShoes(shopsData);
  };

  useEffect(() => {
    fetchShoes();
  }, []);


  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    productDelete(id)
    fetchShoes();
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
    fetchShoes();
  };

  return (
    <>
    <div>
        Historial de ventas
        <div className="cart-sidebar-body d-flex flex-column justify-content-between border h-75">
    {shoes && shoes.length > 0 ? (
      <table className="">
        <thead>
          <tr>
            <th className="p-1">MODELO</th>
            <th className="p-1">MARCA</th>
            <th className="p-1">COLOR</th>
        <th className="p-1">GENERO</th>
        <th className="p-1">DESCRIPCION</th>
        <th className="p-1">TALLE</th>
        <th className="p-1">STOCK</th>
        <th className="p-1">IMAGEN</th>
        <th className="p-1">PROVEEDOR</th>
        <th className="p-1">DESCUENTO</th>
        <th className="p-1">PRECIO</th>
        <th className="p-1">ACCIONES</th>
          </tr>
        </thead>
        <tbody className="">
        {shoes?.map((shoe:any, index: number) => (
            <tr className="" key={index}>
                <td className="p-1">{shoe.model}</td>
            <td className="p-1">{shoe.brand}</td>
            {/* <td className="rounded" style={{"backgroundColor":shoe.Colors[0].name}}>{shoe.Colors[0].name}</td> */}
            <td className="d-flex justify-content-center align-items-center border">
            {
              shoe.Colors ? shoe.Colors.map((color:Color) => (
                <div className="rounded p-1" style={{"backgroundColor":color.name,"color":color.name}}>-</div>
              ))
              : null
            }
            </td>
        <td className="p-1">{shoe.genre}</td>
        <td className="p-1">{shoe.description}</td>
        <td className="p-1">{shoe.Sizes[0].number} - {shoe.Sizes[shoe.Sizes.length - 1].number}</td>
        <td className="p-1">{shoe.stock}</td>
        <td className="p-1">        <img src={`/products/${shoe?.Colors[0]?.color_shoe.image}`} alt={shoe.model} width={"100px"} />
        </td>
        <td className="p-1">{shoe.provider}</td>
        <td className="p-1">{shoe.discount}</td>
        <td className="p-1">{shoe.price}</td>
        <td className="p-1"><div className=" d-flex align-items-center justify-content-center gap-1 p-1 ">
          <div className="custom-button">
            <button
              className="custom-button border p-1"
              onClick={() => handleEdit(shoe)} 

            >
              {" "}
              <i className="bi bi-pencil"></i>
            </button>
          </div>
          <div>
            <button 
            className="custom-button-error border p-1"
            onClick={() => handleDelete(shoe.id)} 
>
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </div></td>
            </tr>
        ))
         }</tbody>          
         </table>

        ) : (
            <span>No hay productos</span>
        )}
</div>
    </div>
    {selectedProduct && (
        <EditProductModal
          show={showModal}
          handleClose={handleClose}
          product={selectedProduct}
        />
      )}
    </>
  );
};

export default ProductList;