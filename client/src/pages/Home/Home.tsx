import React from "react";
import CardList from "../../components/Product/ProductList/CardList";
import "./home.css";

const Home: React.FC = () => {
  return (
    <main className="">
      <article className="">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="/assets/carr1.jpg"
                alt="carrusel"
              />
            </div>

            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="/assets/carr2.jpg"
                alt="carrusel-2"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </article>
      <article className="conteiner-marquee">
        <div className="marquee">
        <h6>CONSULTAR STOCK ANTES DE CONFIRMAR LA COMPRA</h6>
        </div>
        </article>
      <article className="d-flex flex-column align-items-center">
        
        <h4>CATEGORÍAS PRINCIPALES</h4>
        <section className="d-flex gap-1">
          <a href="#productos">Hombres</a>
          <a href="#productos">Mujeres</a>
          <a href="#productos">Niños</a>
        </section>
      </article>
      <article className="w-100 d-flex flex-column align-items-center justify-content-center">
        <h3>PRODUCTOS</h3>
        <section className="w-100 d-flex flex-wrap align-items-center justify-content-center">
          <CardList />
          {/* <a href="">VER TODOS LOS PRODUCTOS</a> */}
        </section>
      </article>
    </main>
  );
};

export default Home;
