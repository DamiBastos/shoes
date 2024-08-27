import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { UserProvider } from "./components/UserContext.tsx";
import { FilterProvider } from './components/FilterContext';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserProvider>
      <FilterProvider>
      <Header></Header>
      <App />
      <Footer></Footer>
      </FilterProvider>
    </UserProvider>
  </BrowserRouter>
);
