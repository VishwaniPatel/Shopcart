import { Button, Flex, Menu, Text } from "@mantine/core";
import { useGetCategoriesQuery } from "../../utility/services/user.service";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICategories } from "../../utility/models/user.model";

const Navbar = () => {
  const { data } = useGetCategoriesQuery();
  const [categories, setCategories] = useState<ICategories[]>([]);

  useEffect(() => {
    if (data) {
      const updatedData = Object.values(data).map(
        (item: any, index: number) => {
          const key = Object.keys(data)[index];
          return {
            id: key,
            name: item.name,
            imageUrl: item.imageUrl,
          };
        }
      );
      setCategories(updatedData);
    }
  }, [data]);

  // menu that display list of categories
  const menuCategories =
    categories.length > 0 &&
    categories.map((data: ICategories) => <Menu.Item>{data.name}</Menu.Item>);

  return (
    <Flex columnGap={"xl"}>
      <Menu
        shadow="md"
        width={200}
        trigger="hover"
        transitionProps={{ transition: "fade", duration: 150 }}
        withinPortal
        position="bottom-start"
      >
        <Menu.Target>
          <Text pr={20} fw={500}>
            Categories
          </Text>
        </Menu.Target>

        <Menu.Dropdown>{menuCategories}</Menu.Dropdown>
      </Menu>

      <Text pr={20} fw={500}>
        Deals
      </Text>

      <Text pr={20} fw={500}>
        What's New
      </Text>

      <Text pr={20} fw={500}>
        Delivery
      </Text>
    </Flex>
  );
};

export default Navbar;
