import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";
import React, { useEffect, useState } from "react";

type ProtectedRouteProps = {
  element: React.ReactElement;
  adminOnly?: boolean;
  userOnly?: number | null; // ID del usuario que puede acceder a la ruta
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  adminOnly,
  userOnly,
}) => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user !== undefined) {
      setLoading(false);
    }

  }, [user]);

  if (loading) {

    return <div>Loading...</div>; // Mostrar un loader mientras se carga el estado del usuario
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && !user.isAdmin) {
    return <Navigate to="/" />;
  }

  if (userOnly && userOnly !== user.id) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
