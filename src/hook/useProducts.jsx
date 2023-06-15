import { useEffect, useState } from "react";
import { getProductData } from "../service/ProductDataService";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    await getProductData().then((res) => {
      const response = res.data;
      setProducts(response);
    });
  };
  console.log(products);
  return products;
};

export default useProducts;
