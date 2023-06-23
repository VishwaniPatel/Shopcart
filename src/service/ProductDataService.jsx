import axios from "axios";
const baseUrl = "http://localhost:3000/";
// to get products details
export const getProductData = async () => {
  return await axios.get(baseUrl + "products");
};
// to add product detail
export const addProductData = async (product) => {
  const url = baseUrl + "products";
  return await axios.post(url, product);
};

// to get categories
export const getCategories = async () => {
  return await axios.get(baseUrl + "categories");
};

// to get categories
export const getSubCategories = async () => {
  return await axios.get(baseUrl + "subcategories");
};

// to get product details by id
export const getProductById = async (id) => {
  return await axios.get();
};
