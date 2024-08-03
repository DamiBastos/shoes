// src/components/EditProductForm.tsx
import React, { useState } from "react";
import { Product } from "../../../types";
import InputField from "../../InputField";
import TextAreaField from "../../TextAreaField";

interface EditProductFormProps {
  initialProduct: Product;
  onClose: () => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({
  initialProduct,
  onClose,
}) => {
  const [product, setProduct] = useState<Product>(initialProduct);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/shoes/update/${product.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );
      if (response.ok) {
        onClose(); // Close the modal after successful edit
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Model"
        type="text"
        name="model"
        id="model"
        value={product.model}
        onChange={handleChange}
      />
      <InputField
        label="Brand"
        type="text"
        name="brand"
        id="brand"
        value={product.brand}
        onChange={handleChange}
      />
      {/* <InputField
        label="Color"
        type="text"
        name="color"
        id="color"
        value={product.color}
        onChange={handleChange}
      /> */}
      <InputField
        label="Size"
        type="number"
        name="size"
        id="size"
        value={product.size}
        onChange={handleChange}
      />
      <InputField
        label="Genre"
        type="text"
        name="genre"
        id="genre"
        value={product.genre}
        onChange={handleChange}
      />
      <TextAreaField
        label="Description"
        name="description"
        id="description"
        value={product.description}
        onChange={handleChange}
      />
      <InputField
        label="Stock"
        type="number"
        name="stock"
        id="stock"
        value={product.stock}
        onChange={handleChange}
      />
      {/* <InputField
        label="Image"
        type="text"
        name="image"
        id="image"
        value={product.image}
        onChange={handleChange}
      /> */}
      <InputField
        label="Price"
        type="number"
        name="price"
        id="price"
        value={product.price}
        onChange={handleChange}
      />
      <InputField
        label="Discount"
        type="number"
        name="discount"
        id="discount"
        value={product.discount}
        onChange={handleChange}
      />
      <InputField
        label="Provider"
        type="text"
        name="provider"
        id="provider"
        value={product.provider}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditProductForm;
