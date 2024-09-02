import React, { useEffect, useState } from "react";
import { useFilter } from "../../components/FilterContext";
// import { useUser } from "../../components/UserContext";
import { Product } from "../../types";
import { listShoes } from "../../api/shoes"; // Asegúrate de tener esta función
import CardList from "../../components/Product/ProductList/CardList";
import "./home.css";

const Home: React.FC = () => {
  const { filter, setFilter } = useFilter();
  // const { cart, fetchCart } = useUser(); // Suponiendo que necesitas fetchCart para algo más
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await listShoes();
      setProducts(allProducts);
      setFilteredProducts(allProducts); // Default filter shows all products
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (filter === "productos") {
      setFilteredProducts(products);
    } else if (filter === "niño") {
      setFilteredProducts(
        products.filter((product) => {
          // Verificar si existe al menos una talla menor a 35
          const hasSizeBelow35 = product.Sizes?.some((size: any) => parseInt(size.number) < 35);
          // Comprobar si hay talla menor a 35 o si el género es "niño"
          return hasSizeBelow35 || product.genre === "niño";
        })
      );    
    } else {
      // Filter products based on the selected genre, including 'unisex' for both men and women
      setFilteredProducts(
        products.filter(
          (product) => product.genre === filter || product.genre === "unisex"
        )
      );
    }
  }, [filter, products]);

  const getLinkClass = (filterValue: string) => {
    return filter === filterValue ? "active-filter" : "";
  };

  return (
    <main>
      <article>
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
      <article id="productos" className="d-flex flex-column align-items-center mb-2">
        <h5>CATEGORÍAS PRINCIPALES</h5>
        <section className="home__nav d-flex gap-1">
          <a
            href="#productos"
            className={getLinkClass("productos")}
            onClick={() => setFilter("productos")}
          >
            Productos
          </a>
          <a
            href="#productos"
            className={getLinkClass("hombre")}
            onClick={() => setFilter("hombre")}
          >
            Hombres
          </a>
          <a
            href="#productos"
            className={getLinkClass("mujer")}
            onClick={() => setFilter("mujer")}
          >
            Mujeres
          </a>
          <a
            href="#productos"
            className={getLinkClass("niño")}
            onClick={() => setFilter("niño")}
          >
            Niños
          </a>
        </section>
      </article>
      <article className="w-100 d-flex flex-column align-items-center justify-content-center">
        {/* <h3>{filter}</h3> */}
        <section className="w-100 d-flex flex-wrap align-items-center justify-content-center">
          <CardList products={filteredProducts} />
          {/* <a href="">VER TODOS LOS PRODUCTOS</a> */}
        </section>
      </article>
    </main>
  );
};

export default Home;
