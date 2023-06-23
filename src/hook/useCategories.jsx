import { useEffect, useState } from "react";
import { getCategories } from "../service/ProductDataService";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    await getCategories().then((res) => {
      const response = res.data;
      const transformedCategories = response?.map((item) => ({
        value: item.categoryId,
        label: item.category,
      }));
      setCategories(transformedCategories);
    });
  };
  console.log(categories);
  return categories;
};

export default useCategories;
