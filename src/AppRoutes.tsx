import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import User from "./pages/user/User";
import AdminRoutes from "./routes/AdminRoutes";
import { RoutesEnum } from "./core/utility/enums/core.enum.ts";
import { useRoles } from "./core/utility/hooks/userRoles.ts";
import adminRoutes from "./routes/AdminRoutes";
function AppRoutes() {
  const routes: any = [
    {
      path: "",
      element: <App />,
      children: [
        adminRoutes,
        {
          path: "",
          element: <User />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router}></RouterProvider>;
}
export default AppRoutes;
