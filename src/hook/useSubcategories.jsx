import { useEffect, useState } from "react";
import { getSubCategories } from "../service/ProductDataService";

const useSubCategories = () => {
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    getSubCategory();
  }, []);
  // get all subcategories from database perform map to use in multiple components
  const getSubCategory = async () => {
    await getSubCategories().then((res) => {
      const response = res.data;
      const transformedSubCategories = response?.map((item) => ({
        id: item.categoryId,
        value: item.id,
        label: item.subCategory,
        background: item.subCategoryBackground,
      }));
      setSubCategories(transformedSubCategories);
    });
  };
  return subCategories;
};

export default useSubCategories;
