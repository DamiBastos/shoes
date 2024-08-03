import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProductDetail from "./pages/Products/ProductDetail";
import Dashboard from "./pages/Admin/Dashboard";
import Checkout from "./pages/Checkout/Checkout";
import MyShops from "./pages/MyShop/MyShops";
import Products from "./pages/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/shops" element={<MyShops />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/payment" element={<Checkout />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="not-found" element={<NotFound />} />
    </Routes>
  );
}

export default App;
