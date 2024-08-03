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
    // card normal
    // <div className="card">
    //   <a href={`/product/${id}`}>
    //     <img src={`/products/${imagen}`} alt={nombre} width={"300px"} />
    //     {/* <h2>imagen: {imagen}</h2> */}
    //     <h2>{nombre}</h2>
    //     <p>Precio: {precio}</p>
    //     <p>Descuento: {descuento}%</p>
    //     <p>Cuotas: {cuotas}</p>
    //   </a>
    // </div>


    // <div className="height d-flex justify-content-center align-items-center">
    
    // <div className="card p-3">
        
    //     <div className="d-flex justify-content-between align-items-center ">
    //         <div className="mt-2">
    //             <h4 className="text-uppercase">{nombre}</h4>
    //             <div className="mt-5">
    //                 <h5 className="text-uppercase mb-0">${precio}</h5>
    //                 <h5 className="text-uppercase mb-0">hasta {cuotas} cuotas </h5>

    //                 <h1 className="main-heading mt-0">Descuento {descuento}%</h1>
    //                 <div className="d-flex flex-row user-ratings">
    //                     <div className="ratings">
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star"></i>
    //                     <i className="fa fa-star"></i>
    //                     </div>
    //                     <h6 className="text-muted ml-1">4/5</h6>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="image">
    //             <img src={`/products/${imagen}`} alt={nombre} width="200" />
    //         </div>
    //     </div>
        
    //     <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
    //         <span>Available colors</span>
    //         <div className="colors">
    //             <span></span>
    //             <span></span>
    //             <span></span>
    //             <span></span>
    //         </div>
            
    //     </div>
        
        
    //     <p>A great option weather you are at office or at home. </p>
    //     <button className="btn btn-danger">Ver detalles</button>

    //     <button className="btn btn-danger">Add to cart</button>
    // </div>
    // </div>

    <div className="card block product no-border z-depth-2-top z-depth-2--hover">
           <a href={`/product/${id}`}>

                    <div className="block-image">
                            <img src={`/products/${imagen}`} alt={nombre} className="img-center"/>
                        
                    </div>
                    <div className="block-body text-center">
                        <h3 className="heading heading-5 strong-600 text-capitalize">
                            {nombre}
                        </h3>
                        <p className="product-description">
                        ${precio}                        </p>
                        {/* <div className="product-colors mt-2">
                            <div className="color-switch float-wrapper">
                                <a href="#" className="bg-purple"></a>
                                <a href="#" className="bg-pink"></a>
                                <a href="#" className="bg-blue"></a>
                            </div>
                        </div> */}
                        <div className="product-buttons mt-4">
                            <div className="row align-items-center">
                                {/* <div className="col-2">
                                    <button type="button" className="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Favorite">
                                        <i className="fa fa-heart"></i>
                                    </button>
                                </div> */}
                                {/* <div className="col-2">
                                    <button type="button" className="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                        <i className="fa fa-share"></i>
                                    </button>
                                </div> */}
                                <div className="">
                                    <button type="button" className="btn btn-block btn-primary btn-circle ">
                                    Add to cart
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
