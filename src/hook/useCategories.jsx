import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../service/ProductDataService";

const useCategories = () => {
  const getCategory = async () => {
    console.log("in function");
    const res = await getCategories();
    const response = res.data;
    const transformedCategories = response?.map((item) => ({
      value: item.id,
      label: item.category,
      background: item.categoryBackground,
    }));
    return transformedCategories;
  };
  const { data, isLoading } = useQuery(["categories"], getCategory);

  return { data, isLoading };
};

export default useCategories;
