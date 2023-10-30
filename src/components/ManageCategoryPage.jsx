import {
  Accordion,
  Container,
  Text,
  Button,
  List,
  Drawer,
  Group,
  Flex,
} from "@mantine/core";
import React from "react";
import useCategories from "../hook/useCategories";
import useSubCategories from "../hook/useSubcategories";
import { IconPlus } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import AddCategoryPage from "./AddCategory";
import AddSubCategoryPage from "./AddSubCategory";

const ManageCategoryPage = () => {
  const category = useCategories();
  const subcategories = useSubCategories();
  const [opened, { open, close }] = useDisclosure(false);
  const [
    openedSubcategory,
    { open: openSubcategory, close: closedSubcategory },
  ] = useDisclosure(false);
  const data =
    category &&
    category.map((item) => (
      <Accordion.Item key={item.value} value={item.label}>
        <Accordion.Control>{item.label}</Accordion.Control>
        <Accordion.Panel>
          <List>
            {subcategories &&
              subcategories
                .filter((subItem) => subItem.id == item.value)
                .map((filteredSubItem) => (
                  <List.Item key={filteredSubItem.value}>
                    {filteredSubItem.label}
                  </List.Item>
                ))}
          </List>
        </Accordion.Panel>
      </Accordion.Item>
    ));
  return (
    <Container>
      <Text fz="xl" fw={700} mb={20}>
        ManageCategoryPage
      </Text>

      <Drawer opened={opened} onClose={close} title="Add Category">
        <AddCategoryPage />
      </Drawer>
      <Drawer
        opened={openedSubcategory}
        onClose={closedSubcategory}
        title="Add SubCategory"
      >
        <AddSubCategoryPage />
      </Drawer>

      <Group position="left" mb={10}>
        <Button onClick={open}>Add Category</Button>
      </Group>
      <Group position="left">
        <Button onClick={openSubcategory}>Add Subcategory</Button>
      </Group>
      <Accordion
        mt={20}
        chevron={<IconPlus size="1rem" />}
        styles={{
          chevron: {
            "&[data-rotate]": {
              transform: "rotate(45deg)",
            },
          },
        }}
      >
        {data}
      </Accordion>
    </Container>
  );
};

export default ManageCategoryPage;
