import { Box, Image } from "@mantine/core";
import logo from "../../../assets/images/Logo.svg";
const Logo = () => {
  return (
    <Box w={180}>
      <Image src={logo} alt="logo" h="100%" w="100%" />
    </Box>
  );
};

export default Logo;
