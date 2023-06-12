import { NavLink, Text } from "@mantine/core";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Text pr={20} fw={500}>
        Category
      </Text>

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
