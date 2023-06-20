import { useEffect, useState } from "react";
import { getSubCategories } from "../service/ProductDataService";

const useSubCategories = () => {
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    getSubCategory();
  }, []);
  const getSubCategory = async () => {
    await getSubCategories().then((res) => {
      const response = res.data;
      const transformedSubCategories = response.map((item) => ({
        id: item.categoryId,
        value: item.subCategoryId,
        label: item.subcategory,
      }));
      setSubCategories(transformedSubCategories);
    });
  };
  return subCategories;
};

export default useSubCategories;
