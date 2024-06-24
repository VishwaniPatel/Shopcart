import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const AppRoutes = () => {
  const isAuthenticated = true;
  const role = false ? "user" : "admin";
  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? <App /> : <Navigate to={PftRoutes.SIGNUP} />,
      children: [
        {
          path: "/",
          element: role === "admin" ? <Admin /> : <User />,
          children: role === "admin" ? adminRoutes : userRoutes,
        },
      ],
    },
    {
      path: PftRoutes.SIGNUP,
      element: <SignUp />,
    },
    {
      path: "*",
      element: <div>Page Not Found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
