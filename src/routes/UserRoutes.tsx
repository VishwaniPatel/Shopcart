import UserProtectedRoutes from "./UserProtectedRoutes";

const userRoutes = {
  path: "/user",
  element: <UserProtectedRoutes allowedRoles={["User"]} />,
  children: [],
};

export default userRoutes;
