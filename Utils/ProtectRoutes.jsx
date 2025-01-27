import { Navigate } from "react-router";

function ProtectRoutes({ isAuthenticated, child }) {
  return isAuthenticated ? child : <Navigate to={"/"}></Navigate>;
}

export default ProtectRoutes;
