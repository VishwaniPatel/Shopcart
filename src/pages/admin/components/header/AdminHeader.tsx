import { Avatar, Box, Burger, Container, Flex, Menu, rem } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
interface IProps {
  handleBurgerClick: () => void;
}
const AdminHeader = ({ handleBurgerClick }: IProps) => {
  return (
    <Box
      w={"100%"}
      h={"var(--mantine-header-height)"}
      px={16}
      style={{ borderBottom: "1px solid var(--mantine-border-color)" }}
    >
      <Flex justify="space-between" h={"100%"} align={"center"}>
        <Burger
          size="md"
          aria-label="Toggle navigation"
          onClick={handleBurgerClick}
        />

        <Menu shadow="md" width={160} position="bottom-end">
          <Menu.Target>
            <Avatar>AD</Avatar>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={
                <IconLogout style={{ width: rem(16), height: rem(16) }} />
              }
            >
              SignOut
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </Box>
  );
};

export default AdminHeader;
