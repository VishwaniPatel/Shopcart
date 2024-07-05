import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import User from "../pages/user/User";
const UserProtectedRoutes = ({ allowedRoles }: any) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/unauthorize" />;
  }

  const userRoles = (user && user.role) || [];
  console.log(userRoles);

  const isAuthorized = allowedRoles.some((role: any) =>
    userRoles.includes(role)
  );
  console.log(isAuthorized);

  if (!isAuthorized) {
    return <Navigate to="/unauthorize" />;
  } else {
    return <User />;
  }
};

export default UserProtectedRoutes;
