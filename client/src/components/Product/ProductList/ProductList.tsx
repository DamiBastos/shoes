import React, { useState, useEffect } from "react";
import { Product } from "../../../types";
import EditProductModal from "../ProductForms/EditProductModal";
import CreateProductModal from "../ProductForms/CreateProductModal"; // Import the CreateProductModal
import { listShoes, productDelete } from "../../../api/shoes";
import { formatNumber } from "../../../utils/formateNumber";

const ProductList: React.FC = () => {
  const [shoes, setShoes] = useState<Product[] | null>(null);
  const [filteredShoes, setFilteredShoes] = useState<Product[] | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false); // State for Create Modal
  const [selectedProvider, setSelectedProvider] = useState(""); // State for provider filter
  const [selectedBrand, setSelectedBrand] = useState(""); // State for brand filter
 
 
  const fetchShoes = async () => {
    const shopsData = await listShoes();
    setShoes(shopsData);
    setFilteredShoes(shopsData); // Initially, no filter is applied
  };

  useEffect(() => {
    fetchShoes();
  }, []);

   // Update filtered products when filters change
   useEffect(() => {
    if (shoes) {
      const filtered = shoes.filter(shoe => {
        return (
          (selectedProvider ? shoe.provider === selectedProvider : true) &&
          (selectedBrand ? shoe.brand === selectedBrand : true) // Assuming 'brand' field exists
        );
      });
      setFilteredShoes(filtered);
    }
  }, [selectedProvider, selectedBrand, shoes]);

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

  // Handlers for filters
  const handleProviderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProvider(event.target.value);
  };

  const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(event.target.value);
  };

  return (
    <>
      <div>
        Lista de productos
        <div className="cart-sidebar-body d-flex flex-column justify-content-between border h-75">
          <div className="d-flex justify-content-between">
          <button onClick={handleCreate}>Crear nuevo</button> {/* Button to open Create Modal */}
          <div className="d-flex gap-3 align-items-center">
          <div className="d-flex gap-1">
            <label htmlFor="">Proveedor:</label>
            <select name="Proveedor" onChange={handleProviderChange} value={selectedProvider}>
            <option value="">Todos</option>
            <option value="Ariel">Ariel</option>
            <option value="William">William</option>
            <option value="Silvia">Silvia</option>
            <option value="Giovani">Giovani</option>
            <option value="Romina">Romina</option>
            <option value="Claudia">Claudia</option>
            <option value="Mono's">Mono's</option>
            <option value="Ojotas-pamela">Pamela</option>




          </select>
          </div>
          <div className="d-flex gap-1">
          <label htmlFor="">Marca:</label>

          <select name="Marca" onChange={handleBrandChange} value={selectedBrand}>
          <option value="">Todos</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Vans">Vans</option>
            <option value="Puma">Puma</option>
            <option value="Converse">Converse</option>



          </select>
          </div>
          </div>
          </div>
          {filteredShoes && filteredShoes.length > 0 ? (
            <table className="">
              <thead>
                <tr className="">
                  <th className="p-1">MODELO</th>
                  {/* <th className="p-1">MARCA</th> */}
                  <th className="p-1">IMAGEN</th>
                  <th className="p-1">PROVEEDOR</th>
                  <th className="p-1">PRECIO</th>
                  <th className="p-1">ACCIONES</th>
                </tr>
              </thead>
              <tbody className="">
                {filteredShoes?.map((shoe: any, index: number) => (
                  <tr className="" key={index}>
                    <td className="p-1">{shoe.model}</td>
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
