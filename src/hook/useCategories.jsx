import { useEffect, useState } from "react";
import { getCategories } from "../service/ProductDataService";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategory();
  }, []);

  // get all categories from database perform map to use in multiple components
  const getCategory = async () => {
    await getCategories().then((res) => {
      const response = res.data;
      const transformedCategories = response?.map((item) => ({
        value: item.id,
        label: item.category,
        background: item.categoryBackground,
      }));
      setCategories(transformedCategories);
    });
  };
  return categories;
};

export default useCategories;
