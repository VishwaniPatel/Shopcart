import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../../../environments/environment";
import {
  ref as storageRef,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { ref as databaseRef, set, push } from "firebase/database";
import { database, storage } from "../../../../firebase/firebase";
export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["Admin"],
  endpoints: (builder) => ({
    uploadImage: builder.mutation<string, File>({
      async queryFn(image) {
        const storageReference = storageRef(storage, `images/${image.name}`);
        const snapshot = await uploadBytes(storageReference, image);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return { data: downloadURL };
      },
    }),
    addCategory: builder.mutation<void, { name: string; imageUrl: string }>({
      async queryFn({ name, imageUrl }) {
        const newCategoryRef = push(databaseRef(database, "categories"));
        await set(newCategoryRef, {
          name,
          imageUrl,
        });
        return { data: undefined };
      },
    }),
    addSubcategory: builder.mutation<
      void,
      { categoryId: string; name: string; imageUrl: string }
    >({
      async queryFn({ categoryId, name, imageUrl }) {
        const newSubcategoryRef = push(databaseRef(database, "subcategories"));
        await set(newSubcategoryRef, {
          categoryId,
          name,
          imageUrl,
        });
        return { data: undefined };
      },
    }),
    saveProduct: builder.mutation<
      void,
      { subcategoryId: string; name: string; price: number; imageUrl: string }
    >({
      async queryFn({ subcategoryId, name, price, imageUrl }) {
        const newProductRef = push(
          databaseRef(database, `subcategories/${subcategoryId}/products`)
        );
        await set(newProductRef, {
          name,
          price,
          imageUrl,
        });
        return { data: undefined };
      },
    }),
    addHeroSection: builder.mutation<
      void,
      { title: string; subtitle: string; imageUrl: string }
    >({
      async queryFn({ title, subtitle, imageUrl }) {
        const newHeroSectionRef = push(databaseRef(database, "herosection"));
        await set(newHeroSectionRef, {
          title,
          subtitle,
          imageUrl,
        });
        return { data: undefined };
      },
    }),
  }),
});
export const {
  useUploadImageMutation,
  useAddCategoryMutation,
  useAddSubcategoryMutation,
  useAddHeroSectionMutation,
} = adminApi;
