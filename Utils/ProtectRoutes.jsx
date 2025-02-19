import { Navigate, useOutletContext } from "react-router";

const ProtectRoutes= ({children}) => {
  const {isAuthenticated } = useOutletContext();

  return isAuthenticated ? children : <Navigate to={"/"}></Navigate>;

}

export default ProtectRoutes;
