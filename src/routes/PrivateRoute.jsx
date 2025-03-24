import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const PrivateRoute = ({ allowedRoles }) => {
  const { user } = useSelector((state) => state.auth);
  const { admin } = useSelector((state) => state.admin);
  const { company } = useSelector((state) => state.company);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    let userInLocal = JSON.parse(localStorage.getItem("user"));
    setIsUserAuthenticated(userInLocal);
  }, []);

  // Determine which user is authenticated
  const authenticatedUser = user || admin || company || isUserAuthenticated;

  if (!authenticatedUser) {
    return <Navigate to="/sign-in" />;
  }

  if (!allowedRoles.includes(authenticatedUser.role)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
