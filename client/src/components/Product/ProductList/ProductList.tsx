import React, { useState, useEffect } from "react";
import { Product } from "../../../types";
import EditProductModal from "../ProductForms/EditProductModal";
import CreateProductModal from "../ProductForms/CreateProductModal"; // Import the CreateProductModal
import { listShoes, productDelete } from "../../../api/shoes";
import { Color } from "../../../types";
import { formatNumber } from "../../../utils/formateNumber";

const ProductList: React.FC = () => {
  const [shoes, setShoes] = useState<Product[] | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false); // State for Create Modal

  const fetchShoes = async () => {
    const shopsData = await listShoes();
    setShoes(shopsData);
  };

  useEffect(() => {
    fetchShoes();
  }, []);

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const handleCreate = () => {
    setShowCreateModal(true); // Open the Create Modal
  };

  const handleDelete = (id: string) => {
    productDelete(id);
    fetchShoes();
  };

  const handleClose = () => {
    setShowEditModal(false);
    setSelectedProduct(null);
    fetchShoes();
  };

  const handleCreateClose = () => {
    setShowCreateModal(false); // Close the Create Modal
    fetchShoes();
  };

  return (
    <>
      <div>
        Lista de productos
        <div className="cart-sidebar-body d-flex flex-column justify-content-between border h-75">
          <button onClick={handleCreate}>Crear nuevo</button> {/* Button to open Create Modal */}
          {shoes && shoes.length > 0 ? (
            <table className="">
              <thead>
                <tr className="">
                  <th className="p-1">MODELO</th>
                  <th className="p-1">MARCA</th>
                  <th className="p-1">IMAGEN</th>
                  <th className="p-1">PROVEEDOR</th>
                  <th className="p-1">PRECIO</th>
                  <th className="p-1">ACCIONES</th>
                </tr>
              </thead>
              <tbody className="">
                {shoes?.map((shoe: any, index: number) => (
                  <tr className="" key={index}>
                    <td className="p-1">{shoe.model}</td>
                    <td className="p-1">{shoe.brand}</td>
                    {/* <td className="d-flex justify-content-center align-items-center">
                      {shoe.Colors
                        ? shoe.Colors.map((color: Color, index: number) => (
                            <div
                              className="rounded-button p-1"
                              style={{
                                backgroundColor: color.name,
                                color: color.name,
                              }}
                              key={index}
                            >
                              -
                            </div>
                          ))
                        : null}
                    </td> */}
                    <td className="p-1">
                      <div className=" h-25 border">
                      <img
                        src={`${shoe?.Colors[0]?.color_shoe.image}`}
                        alt={shoe.model}
                        width={"100px"}
                      />
                      </div>
                    </td>
                    <td className="p-1">{shoe.provider}</td>
                    <td className="p-1">${formatNumber(shoe.price)}</td>
                    <td className="p-1">
                      <div className=" d-flex align-items-center justify-content-center gap-1 p-1 ">
                        <div className="custom-button">
                          <button
                            className="rounded-button p-1"
                            onClick={() => handleEdit(shoe)}
                          >
                            <i className="bi bi-pencil"></i>
                          </button>
                        </div>
                        <div>
                          <button
                            className="rounded-button  p-1"
                            onClick={() => handleDelete(shoe.id)}
                          >
                            <i className="bi bi-trash3"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <span>No hay productos</span>
          )}
        </div>
      </div>
      {selectedProduct && (
        <EditProductModal
          show={showEditModal}
          handleClose={handleClose}
          product={selectedProduct}
        />
      )}
      {showCreateModal && (
        <CreateProductModal show={showCreateModal} handleClose={handleCreateClose} />
      )}
    </>
  );
};

export default ProductList;
