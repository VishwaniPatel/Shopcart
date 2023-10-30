import { useContext, useState, useEffect } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  rem,
  Text,
  Flex,
  Indicator,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../logo/Logo";
import Navbar from "../components/Navbar";
import SearchInput from "../components/SearchInput";
import { IconShoppingCartPlus, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import CartContext from "../components/CartContext";
import useCartData from "../hook/useCart";
const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  cursorPointer: {
    cursor: "pointer",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export function HeaderSection() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const { cartItems, setCartItems } = useContext(CartContext);
  const getCartData = useCartData();
  const [cartDataLength, setCartDataLength] = useState(0);

  useEffect(() => {
    setCartDataLength(cartItems.length);
  }, [cartItems]);
  useEffect(() => {
    setCartItems(getCartData);
  }, [getCartData]);
  return (
    <Header height={80}>
      <Container size="xl" className={classes.header}>
        <Link to={"/home"}>
          <Logo />
        </Link>
        <Group spacing={5} className={classes.links}>
          <Navbar />
        </Group>
        <SearchInput />
        <Group>
          <IconUser />
          <Text>Account</Text>
          <Link to={"/cart"}>
            <Flex>
              <Indicator
                size={20}
                label={cartDataLength}
                className={classes.cursorPointer}
              >
                <IconShoppingCartPlus />
              </Indicator>
              <Text ml={20}>Cart</Text>
            </Flex>
          </Link>
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
}
