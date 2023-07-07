import { useEffect, useState } from "react";
import { getProductData } from "../service/ProductDataService";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  // get all products data for all categories
  const getProducts = async () => {
    await getProductData().then((res) => {
      const response = res.data;
      setProducts(response);
    });
  };
  return products;
};

export default useProducts;
