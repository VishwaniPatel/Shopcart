import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../../../environments/environment";

import { ref as databaseRef, set, push, get } from "firebase/database";
import { database } from "../../../../firebase/firebase";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getCategories: builder.query<any, void>({
      async queryFn() {
        const categoriesRef = databaseRef(database, "categories");
        const snapshot = await get(categoriesRef);
        return { data: snapshot.val() };
      },
    }),
    getSubcategories: builder.query<any, string>({
      async queryFn(categoryId) {
        const subcategoriesRef = databaseRef(
          database,
          `categories/${categoryId}/subcategories`
        );
        const snapshot = await get(subcategoriesRef);
        return { data: snapshot.val() };
      },
    }),
    getProducts: builder.query<any, string>({
      async queryFn(subcategoryId) {
        const productsRef = databaseRef(
          database,
          `subcategories/${subcategoryId}/products`
        );
        const snapshot = await get(productsRef);
        return { data: snapshot.val() };
      },
    }),
    getHeroSection: builder.query<any, void>({
      async queryFn() {
        const heroSectionRef = databaseRef(database, "herosection");
        const snapshot = await get(heroSectionRef);
        return { data: snapshot.val() };
      },
    }),
  }),
});
export const {
  useGetCategoriesQuery,
  useGetSubcategoriesQuery,
  useGetProductsQuery,
  useGetHeroSectionQuery,
} = userApi;
