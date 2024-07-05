import { useContext, useState, useEffect } from "react";
import {
  Container,
  Group,
  Burger,
  rem,
  Text,
  Flex,
  Indicator,
  Button,
  Skeleton,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../../../../core/components/logo/Logo";
import { IconShoppingCartPlus, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import useCartData from "../hook/useCart";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "./UserProfile";
import Navbar from "./Navbar";
import SearchInput from "./SearchInput";

export function UserHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  //   const { cartItems, setCartItems } = useContext(CartContext);
  //   const { data: getCartData, isLoading } = useCartData();
  //   const [cartDataLength, setCartDataLength] = useState(0);
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  console.log(isAuthenticated);

  //   useEffect(() => {
  //     setCartDataLength(cartItems ? cartItems.length : 0);
  //   }, [cartItems]);

  //   useEffect(() => {
  //     console.log(getCartData);
  //     if (getCartData) {
  //       setCartItems(getCartData);
  //     }
  //   }, [getCartData]);

  return (
    <Box component="header" bg={"white"}>
      <Container
        size={"var(--mantine-container-width)"}
        h={"var(--mantine-header-height)"}
      >
        <Flex justify="space-between" h={"100%"} align={"center"}>
          <Link to={"/home"}>
            <Logo />
          </Link>
          <Group gap={5}>
            <Navbar />
          </Group>
          <Group>
            {isAuthenticated ? (
              <>
                <SearchInput />

                <Link to={"/cart"}>
                  <Flex>
                    <Indicator
                      size={16}
                      // label={cartDataLength}pioy8ihb
                    >
                      <IconShoppingCartPlus />
                    </Indicator>
                  </Flex>
                </Link>
                <UserProfile />
              </>
            ) : (
              <Button onClick={loginWithRedirect}>Sign-In</Button>
            )}
          </Group>
        </Flex>
      </Container>
    </Box>
  );
}
