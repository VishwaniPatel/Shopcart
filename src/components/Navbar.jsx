import { NavLink, Text, Menu, Button } from "@mantine/core";
import React from "react";
import useCategories from "../hook/useCategories";
import { Link } from "react-router-dom";
const Navbar = () => {
  const categories = useCategories();
  const menuCategories = categories.map((data) => (
    <Link to={"/category/" + data.value} key={data.value}>
      <Menu.Item key={data.value} carddata={data}>
        {data.label}
      </Menu.Item>
    </Link>
  ));
  return (
    <>
      <Menu
        shadow="md"
        width={200}
        trigger="hover"
        transitionProps={{ exitDuration: 0 }}
        withinPortal
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
    </>
  );
};

export default Navbar;
