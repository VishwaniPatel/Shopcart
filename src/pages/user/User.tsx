import { Box, Flex } from "@mantine/core";
import { UserHeader } from "./components/Header/UserHeader";
import { Outlet } from "react-router-dom";
import Home from "./components/Home";

const User = () => {
  return (
    <Flex h="100%" direction="column">
      <UserHeader />
      <Box style={{ overflow: "auto" }} h="100%">
        {/* <Outlet /> */}
        <Home />
      </Box>
    </Flex>
  );
};

export default User;
