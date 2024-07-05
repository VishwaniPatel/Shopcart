import { RoutesEnum } from "../core/utility/enums/core.enum.ts";
import Categories from "../pages/admin/components/categories/Categories.tsx";
import ManageCategories from "../pages/admin/components/categories/ManageCategories.tsx";
import Dashboard from "../pages/admin/components/dashboard/Dashboard.tsx";
import ManageHerosection from "../pages/admin/components/heroSection/ManageHerosection.tsx";
import ManageSubcategories from "../pages/admin/components/subCategories/ManageSubcategories.tsx";
import AdminProtectedRoutes from "./AdminProtectedRoutes.tsx";

const adminRoutes = {
  path: "/admin",
  element: <AdminProtectedRoutes allowedRoles={["Admin"]} />,
  children: [
    {
      path: RoutesEnum.DASHBOARD,
      element: <Dashboard />,
    },
    {
      path: RoutesEnum.FRONTEND,
      children: [
        {
          path: RoutesEnum.HERO_SECTION,
          element: <ManageHerosection />,
        },
        {
          path: RoutesEnum.CATEGORIES,
          element: <Categories />,
        },
        {
          path: RoutesEnum.SUBCATEGORIES,
          element: <ManageSubcategories />,
        },
      ],
    },
  ],
};

export default adminRoutes;
