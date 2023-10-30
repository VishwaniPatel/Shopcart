import axios from "axios";
import { json } from "react-router-dom";
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

//to add categories
export const addCategory = async (category) => {
  const url = baseUrl + "categories";
  return await axios.post(url, category);
};
//to add sub-categories
export const addSubCategory = async (subcategory) => {
  const url = baseUrl + "subcategories";
  return await axios.post(url, subcategory);
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

export const addCartProducts = async (customerId, item) => {
  // Fetch the existing customer data
  const customerUrl = baseUrl + "customer/" + customerId;
  const customerResponse = await axios.get(customerUrl).then((res) => {
    return res.data;
  });
  const cartData = customerResponse?.cart;
  if (!cartData?.item?.id) {
    cartData.push(item);
  }
  // Update the customer data with the updated cart using a PUT request
  const updatedCustomerData = {
    ...customerResponse,
    cart: cartData,
  };
  const updateUrl = baseUrl + "customer/" + customerId;
  return (response = await axios.put(updateUrl, updatedCustomerData));
};

// to delete product from cart
export const deleteCartProduct = async (customerId, productId) => {
  // Fetch the existing customer data
  const customerUrl = baseUrl + "customer/" + customerId;
  const customerResponse = await axios.get(customerUrl).then((res) => {
    return res.data;
  });

  const cartData = customerResponse?.cart;

  // Find the index of the cart product with the given productId
  const index = cartData.findIndex((product) => product.id === productId);

  if (index !== -1) {
    // Remove the cart product from the cartData array
    cartData.splice(index, 1);
  }

  // Update the customer data with the updated cart using a PUT request
  const updatedCustomerData = {
    ...customerResponse,
    cart: cartData,
  };

  const updateUrl = baseUrl + "customer/" + customerId;

  return await axios.put(updateUrl, updatedCustomerData);
};

export const updateCartProduct = async (customerId, productId, newQuantity) => {
  const customerUrl = baseUrl + "customer/" + customerId;
  // Fetch the existing customer data
  const customerResponse = await axios.get(customerUrl);
  const customerData = customerResponse.data;

  // Find the specific cart item in the array
  const cartItem = customerData.cart.find((item) => item.id === productId);

  if (cartItem) {
    // Update the cart item quantity
    cartItem.quantity = newQuantity;

    // Update the customer data with the modified cart items
    const updatedCustomerData = {
      ...customerData,
      cart: customerData.cart,
    };

    // Send a PUT request to update the customer data on the server
    await axios.put(customerUrl, updatedCustomerData);
  }
};
