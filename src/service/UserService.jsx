import axios from "axios";
const baseUrl = "http://localhost:3000/";
// to get user details

export const getCustomerData = async () => {
  return await axios.get(baseUrl + "customer");
};

// to add user detail
export const addUserData = async (user) => {
  return await axios.post(`${users}`, user);
};
