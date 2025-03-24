import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ allowedRoles }) => {
  const { user } = useSelector((state) => state.auth);
  const { admin } = useSelector((state) => state.admin);
  const { company } = useSelector((state) => state.company);

  // Determine which user is authenticated
  const authenticatedUser = user || admin || company;

  if (!authenticatedUser) {
    return <Navigate to="/sign-in" />;
  }

  if (!allowedRoles.includes(authenticatedUser.role)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
