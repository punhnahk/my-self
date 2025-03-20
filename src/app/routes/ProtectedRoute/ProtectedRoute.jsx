import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = !!localStorage.getItem("token"); // Example auth check

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export { ProtectedRoute };
