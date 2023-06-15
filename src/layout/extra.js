import React, { useEffect, useState } from "react";
import { getProductData } from "../service/ProductDataService";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const fetchedProducts = [];
    await getProductData().then((res) => {
      const response = res.data;
      for (const key in response) {
        if (response[key]) {
          const data = {
            id: response[key].productId,
            productName: response[key].productName,
            productCategory: response[key].productCategory,
            productSubCategory: response[key].productSubCategory,
            productPrice: response[key].productPrice,
            productDescription: response[key].productDescription,
            productRating: response[key].productRating,
            productQuantity: response[key].productQuantity,
            productColor: response[key].productColor,
          };
          fetchedProducts.push(data);
        }
      }
      setProducts(response);
    });
  };
  console.log(products);
  return products;
};

export default Products;
