import { Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoute";
import PublicRoutes from "./PublicRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {PublicRoutes}
      {PrivateRoutes}
    </Routes>
  );
};

export default AppRoutes;
