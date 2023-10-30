import React, { useState } from "react";
import { Menu, Button } from "@mantine/core";
import useSubCategories from "../hook/useSubcategories";

function FilterProductData({ id, setValue }) {
  const [selectedValue, setSelectedValue] = useState("");

  const subcategories = useSubCategories();

  const subcategory = subcategories.filter((response) => response.id == id);
  const handleSelect = (value) => {
    setValue(value);
  };
  return (
    <Menu shadow="md" width={150} position="bottom-end">
      <Menu.Target>
        <Button>Filter Products</Button>
      </Menu.Target>

      <Menu.Dropdown onSelect={handleSelect}>
        {subcategory.map((option) => (
          <Menu.Item
            key={option.value}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}

export default FilterProductData;
