import React, { useEffect, useState } from "react";
import { User, CardProps } from "../../../types";
import "./card.css";

const Card: React.FC<CardProps> = ({
  id,
  nombre,
  imagen,
  precio,
  descuento,
  cuotas,
  openModal,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser: { user: User } = JSON.parse(storedUser);
      setUser(parsedUser.user); // Accede a la propiedad `user` anidada
    }
  }, []);

  const handleOpenModal = () => {
    openModal(id); // Llama a la función openModal pasando el ID del producto
  };

  return (
    <div className="card">
      <a href={`/product/${id}`}>
        <img src={`/products/${imagen}`} alt={nombre} width={"300px"} />
        <h2>{nombre}</h2>
        <p>Precio: {precio}</p>
        <p>Descuento: {descuento}%</p>
        <p>Cuotas: {cuotas}</p>
      </a>

      {user && user.isAdmin ? (
        <div className=" d-flex align-items-center justify-content-center gap-5 p-2 ">
          <div className="custom-button">
            <button
              className="custom-button border p-2"
              onClick={handleOpenModal}
            >
              {" "}
              <i className="bi bi-pencil"></i>
            </button>
          </div>
          <div>
            <button className="custom-button-error border p-2">
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
