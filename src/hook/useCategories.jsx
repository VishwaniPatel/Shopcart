import { useEffect, useState } from "react";
import { getCategories } from "../service/ProductDataService";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useCategories = () => {
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   getCategory();
  // }, []);

  // get all categories from database perform map to use in multiple components
  // const getCategory = async () => {
  //   console.log("In function");
  //   const res = await getCategories();
  //   const response = res.data;
  //   console.log(response);
  //   const transformedCategories = response?.map((item) => ({
  //     value: item.id,
  //     label: item.category,
  //     background: item.categoryBackground,
  //   }));
  //   return transformedCategories;
  // };
  // const { data, isLoading } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: getCategory,
  // });
  const fetchTodos = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return res.data;
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  return { data };
};

export default useCategories;
