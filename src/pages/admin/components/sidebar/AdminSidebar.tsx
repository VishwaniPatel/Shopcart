import { Anchor, Box, Flex, Image, List, ListItem } from "@mantine/core";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../../core/components/logo/Logo";
import BrandLogoWithoutName from "../../../../assets/images/LogoWithoutName.jpg";
import { SidebarListItem } from "../../utility/constants/Admin.constant";
const AdminSidebar = ({ checked }: { checked: boolean }) => {
  const navigate = useNavigate();

  return (
    <Box
      bg={"white"}
      h={"100%"}
      w={checked ? "260px" : "80px"}
      style={{ borderRight: "1px solid var(--mantine-border-color)" }}
      className="transition-all"
    >
      <Flex direction="column" px={20} py={10} style={{ overflow: "hidden" }}>
        {/* Brand logo  */}
        {checked ? (
          <Logo />
        ) : (
          <Box>
            <Image src={BrandLogoWithoutName} alt="logo" h="100%" w="40px" />
          </Box>
        )}
        {/* Navigation for the pages  */}
        <Flex
          direction={"column"}
          align={checked ? "flex-start" : "center"}
          rowGap={"xl"}
          py={20}
        >
          <List className="sidebar-nav-list">
            {SidebarListItem.map((listItem, index) => {
              const Icon = listItem.icon;
              return (
                <ListItem
                  py={"md"}
                  display={"flex"}
                  key={index}
                  onClick={() => navigate(listItem.redirectTo)}
                  className="sidebar-nav-item cp"
                >
                  <Flex align={"center"} className="transition-all">
                    {checked ? (
                      <>
                        <Icon size={28} />
                        <Anchor
                          component={NavLink}
                          to={listItem.redirectTo}
                          className={
                            checked ? "nav-item-text" : "nav-item-text-remove"
                          }
                          underline="never"
                          px={"sm"}
                        >
                          {listItem.label}
                        </Anchor>
                      </>
                    ) : (
                      <Icon size={28} />
                    )}
                  </Flex>
                </ListItem>
              );
            })}
          </List>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AdminSidebar;
