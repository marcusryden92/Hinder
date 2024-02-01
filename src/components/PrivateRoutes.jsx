import { useAuth } from "../context/context";
import { Outlet, Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { loggedInUser } = useAuth();

  return loggedInUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
