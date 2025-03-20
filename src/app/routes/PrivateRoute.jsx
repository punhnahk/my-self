import Home from "../../pages/Home.jsx";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute.jsx";

const PrivateRoutes = (
  <Route path="/" element={<ProtectedRoute />}>
    <Route path="home" element={<Home />} />
  </Route>
);

export default PrivateRoutes;
