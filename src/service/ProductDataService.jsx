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
  const url = baseUrl + "products/" + id;
  return await axios.get(url);
};

//to get cart details
export const getCartProducts = async (customerId) => {
  return await axios.get(baseUrl + "customer/" + customerId);
};
// let cartData = [];

export const addCartProducts = async (customerId, item) => {
  // Fetch the existing customer data
  const customerUrl = baseUrl + "customer/" + customerId;
  const customerResponse = await axios.get(customerUrl).then((res) => {
    // console.log(res.data);
    return res.data;
  });
  const cartData = customerResponse?.cart;
  if (!cartData?.item?.id) {
    cartData.push(item);
  }

  console.log(cartData);

  // Update the customer data with the updated cart using a PUT request
  const updatedCustomerData = {
    ...customerResponse,
    cart: cartData,
  };
  const updateUrl = baseUrl + "customer/" + customerId;
  return (response = await axios.put(updateUrl, updatedCustomerData));
};
