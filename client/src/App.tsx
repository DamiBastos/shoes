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
import ProtectedRoute from "./components/ProtectedRoute";
import { useUser } from "./components/UserContext";
import { useEffect } from "react";

function App() {
  const { user } = useUser();

  useEffect(() => {
    console.log("Usuario en App:", user);
  }, [user]);

  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/payment" element={<Checkout />} />

      {/* Rutas protegidas */}
      <Route
        path="/shops"
        element={<ProtectedRoute element={<MyShops />} userOnly={user?.id || null} />}
      />
      <Route
        path="/admin/dashboard"
        element={<ProtectedRoute element={<Dashboard />} adminOnly={true} />}
      />

      {/* Ruta para manejar páginas no encontradas */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
