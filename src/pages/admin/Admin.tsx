import { Outlet } from "react-router-dom";
import AdminHeader from "./components/header/AdminHeader";
import { useState } from "react";
import { Box, Checkbox, Flex } from "@mantine/core";
import AdminSidebar from "./components/sidebar/AdminSidebar";

const Admin = () => {
  const [checked, setChecked] = useState<boolean>(true);

  const toggleClick = () => {
    setChecked(!checked);
  };
  return (
    <Flex h="100%" w="100%" style={{ overflow: "auto" }}>
      <Checkbox
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        style={{ display: "none" }}
      />
      <AdminSidebar checked={checked} />
      <Flex
        direction="column"
        style={{ flexGrow: 1, overflow: "hidden" }}
        h="100%"
      >
        <AdminHeader handleBurgerClick={toggleClick} />
        <Box style={{ overflow: "auto" }} p={24}>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Admin;
