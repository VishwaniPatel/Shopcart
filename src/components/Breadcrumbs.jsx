import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import useCategories from "../hook/useCategories";
import { Breadcrumbs, createStyles } from "@mantine/core";
import useProducts from "../hook/useProducts";
const useStyles = createStyles((theme) => ({
  activeBreadcrumb: {
    color: "#3d3d3b",
  },

  lastBreadcrumb: {
    color: "blue",
    fontWeight: "bold",
  },
}));
const BreadcrumbsUI = () => {
  const location = useLocation();
  const { categoryId, productId } = useParams();
  const categories = useCategories();
  const products = useProducts();
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const { classes } = useStyles();
  useEffect(() => {
    // find path using params
    const paths = location.pathname.split("/").filter((path) => path !== "");
    const breadcrumbData = [
      { path: "/", label: "Home" },
      ...paths.map((path, index) => {
        // if path contains category than label should be displayed as Category Name
        if (path === "category") {
          const category = categories.find(
            (category) => category.value == categoryId
          );
          if (category) {
            return {
              path: `/category/${categoryId}`,
              label: category.label,
            };
          }
        }
        // if path contains product detail than label should be displayed as Category Name as well as product name
        if (path === "product-detail") {
          const category = categories.find(
            (category) => category.value == categoryId
          );
          const product = products.find((product) => product.id == productId);
          if (category && product) {
            return {
              path: `/category/${categoryId}/product-detail/${productId}`,
              label: product.productName,
            };
          }
        }
        return null;
      }),
    ].filter(Boolean);
    setBreadcrumbs(breadcrumbData);
  }, [location, categoryId, productId, categories, products]);

  return (
    <Breadcrumbs mt={20} mb={20}>
      {breadcrumbs.map((breadcrumb, index) => (
        <Link
          key={index}
          to={breadcrumb.path}
          className={
            index === breadcrumbs.length - 1
              ? classes.lastBreadcrumb
              : classes.activeBreadcrumb
          }
        >
          {breadcrumb.label}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsUI;
