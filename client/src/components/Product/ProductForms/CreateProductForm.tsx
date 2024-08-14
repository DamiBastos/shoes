import React, { useEffect, useState } from "react";
import InputField from "../../InputField";
import { productCreate } from "../../../api/shoes";
import SelectField from "../../SelectField";
import { listColors } from "../../../api/color";
import { Color, Product } from "../../../types";
import ErrorMessage from "../../ErrorMessage";


interface CreateProductFormProps {
  onClose: () => void;
}

const CreateProductForm: React.FC<CreateProductFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<Product>({
    model: "",
    brand: "",
    genre: "Unisex",
    description: "",
    stock: 0,
    price: 0,
    discount: 0,
    provider: "",
    Colors: [],
    image: "",
  });

  const [colors, setColors] = useState<Color[]>([]);
  const [errors, setErrors] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIds = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setFormData({
      ...formData,
      Colors: selectedIds,
    });
  };

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const colores = await listColors();
        setColors(colores);
      } catch (error) {
        console.error("Error al cargar los colores:", error);
      }
    };

    fetchColors();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

       // Validar campos vacíos
    if (!formData.model || !formData.brand || !formData.genre || !formData.stock ||!formData.price || !formData.provider ||!formData.Colors || !formData.image) {
      setErrors("Por favor, complete todos los campos obligatorios.");
      return;
    }
      await productCreate(formData);

      onClose();
    } catch (error) {
      setErrors("Hubo un error al crear el producto");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Modelo"
        type="text"
        name="model"
        id="model"
        value={formData.model}
        placeholder="Ej: Nike Clásicas"
        onChange={handleChange}
      />
      <InputField
        label="Marca"
        type="text"
        name="brand"
        id="brand"
        placeholder="Ej: Nike"
        value={formData.brand}
        onChange={handleChange}
      />
      {/* Select para colores y talles */}
      <SelectField
        label="Color"
        name="Colors"
        id="Colors"
        multiple={false}
        onChange={handleColorChange}
        options={colors.map((color) => ({
          label: color.name, 
          value: color.id.toString(), 
        }))}
      />
      <InputField
        label="Género"
        type="text"
        name="genre"
        id="genre"
        placeholder="Unisex"
        value={formData.genre}
        onChange={handleChange}
      />
      <InputField
        label="Stock"
        type="number"
        name="stock"
        id="stock"
        placeholder="Ej: 10"
        value={formData.stock}
        onChange={handleChange}
      />
      <InputField
        label="Imagen"
        type="text"
        name="image"
        id="image"
        placeholder="Ej: https://image.com/nike-clasicas"
        value={formData.image}
        onChange={handleChange}
      />
      <InputField
        label="Precio"
        type="number"
        name="price"
        id="price"
        placeholder="Ej: $50.000"
        value={formData.price}
        onChange={handleChange}
      />
   
      <InputField
        label="Proveedor"
        type="text"
        name="provider"
        id="provider"
        placeholder="Ej: William"
        value={formData.provider}
        onChange={handleChange}
      />
      {/* {errors && <div className="error-message">{errors}</div>} */}
      <ErrorMessage message={errors} />

      <button type="submit">Guardar</button>
    </form>
  );
};

export default CreateProductForm;
