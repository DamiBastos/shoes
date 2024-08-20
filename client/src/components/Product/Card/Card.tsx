import React, { useEffect, useState } from "react";
import { User, CardProps } from "../../../types";
import "./card.css";
import { formatNumber } from "../../../utils/formateNumber";

const Card: React.FC<CardProps> = ({
  id,
  nombre,
  marca,
  imagen,
  precio,
  talle,
}) => {

  const [, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser: { user: User } = JSON.parse(storedUser);
      setUser(parsedUser.user);
    }
  }, []);

  return (
    <div className="card">
      <a href={`/product/${id}`}>
      <h5 className="heading heading-5 strong-600 text-capitalize">
            {nombre}
          </h5>
        <div className="container-img">
          <img
            src={`${imagen}`}
            alt={nombre}
            className="img-center"
          />
        </div>
        <div className="text-center">
          <h6 className="">{marca}</h6>
          <p className="product-description"><strong>Talles:</strong> {talle} </p>
          <p className="product-description"><strong>Precio:</strong> ${formatNumber(precio)} </p>

          <div className="product-buttons mt-4">
            <div className="row align-items-center">
              <div className="">
                <button
                  type="button"
                  className="btn btn-block btn-primary btn-circle "
                >
                  Ver detalle
                </button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
