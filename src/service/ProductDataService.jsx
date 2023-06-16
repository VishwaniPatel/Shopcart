import axios from "axios";
const baseUrl = " http://localhost:3000/";
// to get products details
export const getProductData = async () => {
  return await axios.get(baseUrl + "products");
};
// to add product detail
export const addProductData = async (product) => {
  return await axios.post(`${baseUrl}`, product);
};
