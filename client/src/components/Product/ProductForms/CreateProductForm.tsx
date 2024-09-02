import React, { useEffect, useState } from "react";
import InputField from "../../InputField";
import { productCreate } from "../../../api/shoes";
import SelectField from "../../SelectField";
import { listColors } from "../../../api/color";
import { Color, Product } from "../../../types";
import ErrorMessage from "../../ErrorMessage";
import { listSizes } from "../../../api/size";
import { Size } from "../../../types/Size";
import CheckBoxFields from "../../CheckBoxFields";


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
    Sizes:[],
    image: "",
  });

  const [colors, setColors] = useState<Color[]>([]);
  const [sizes, setSizes] = useState<Size[]>([]);
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
    const fetchSizes = async () => {
      try {
        const talles = await listSizes();
        setSizes(talles);
      } catch (error) {
        console.error("Error al cargar los talles:", error);
      }
    };
    fetchColors();
    fetchSizes();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

       // Validar campos vacíos
    if (!formData.model || !formData.brand || !formData.genre || !formData.stock ||!formData.price || !formData.provider ||!formData.Colors || !formData.image || formData.Sizes.length < 1) {
      setErrors("Por favor, complete todos los campos obligatorios.");
      return;
    }
      await productCreate(formData);

      onClose();
    } catch (error) {
      setErrors("Hubo un error al crear el producto");
    }
  };

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const optionValue = event.target.value;
    const isChecked = event.target.checked;

    const newValue = isChecked
      ? [...selectedOptions, optionValue]
      : selectedOptions.filter((val) => val !== optionValue);

    setSelectedOptions(newValue);
    setFormData({
      ...formData,
      Sizes: selectedOptions,
    });
  };

  const handleGenreChange= (event: React.ChangeEvent<HTMLSelectElement>) =>{
    const selected = event.target.value
    setFormData({
      ...formData,
      genre: selected,
    });
  }

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
      <CheckBoxFields
        id="Sizes"
        label="Talles:"
        options={sizes.map((size) => ({
          label: String(size.number), 
          value: size.id.toString(), 
        }))}
        name="Sizes"
        value={selectedOptions}
        onChange={handleCheckboxChange}
      />
      {/* <InputField
        label="Género"
        type="text"
        name="genre"
        id="genre"
        placeholder="Unisex"
        value={formData.genre}
        onChange={handleChange}
      /> */}

      <SelectField
        label="Género"
        name="genre"
        id="genre"
        multiple={false}
        onChange={handleGenreChange}
        options={
          [
          {label:"Unisex",value:"unisex"},
          {label:"Hombre",value:"hombre"},
          {label:"Mujer",value:"mujer"},
          {label:"Niño",value:"niño"}
        ]
        }
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
        label="Imágen"
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
