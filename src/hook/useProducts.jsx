import { useEffect, useState } from "react";
import { getProductData } from "../service/ProductDataService";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   getProducts();
  // }, []);

  // get all products data for all categories
  const getProducts = async () => {
    await getProductData().then((res) => {
      const response = res.data;
      // setProducts(response);
      return response;
    });
  };
  const { data, isLoading } = useQuery(["products"], getProducts);
  return { data, isLoading };
};

export default useProducts;
