import {
  Button,
  Container,
  FileInput,
  Text,
  TextInput,
  Select,
  Notification,
} from "@mantine/core";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

import useCategories from "../hook/useCategories";
import { addSubCategory } from "../service/ProductDataService";

const AddSubCategoryPage = () => {
  const category = useCategories();
  const [subCategoryImage, setSubCategoryImage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [value, setValue] = useState();
  const handleSubmit = (values) => {
    const subcategory = {
      ...values,
      subCategoryBackground: subCategoryImage,
    };
    console.log(subcategory);
    addSubCategory(subcategory);
    setShowNotification(true);
    setSubCategoryImage("");
    setValue("");
  };
  const handleCategoryChange = (value) => {
    setValue(value);
  };
  const handleImageChange = (event) => {
    const file = event;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        const fileName = file.name; // Get the file name

        setSubCategoryImage(base64Image);
      };
      reader.readAsDataURL(file);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <Container>
      {showNotification && (
        <Notification
          title="Form Submitted"
          color="green"
          onClose={() => setShowNotification(false)}
        >
          Subcategory data submitted successfully!
        </Notification>
      )}
      <Text size={30} fw={500} p={20} color="white">
        Manage SubCategory
      </Text>
      <Formik
        initialValues={{
          categoryId: "0",
          subCategory: "",
          subCategoryBackground: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="categoryId">
            {({ field }) => (
              <Select
                {...field}
                label="Product Category"
                placeholder="Select Category"
                data={category}
                value={field.value}
                onChange={(value) => {
                  field.onChange({
                    target: { name: field.name, value: value },
                  });
                  handleCategoryChange(value);
                }}
              />
            )}
          </Field>
          <Field name="subCategory">
            {({ field }) => (
              <TextInput
                {...field}
                type="text"
                label="SubCategory Label"
                placeholder="Enter SubCategory Label"
              />
            )}
          </Field>
          <Field name="subCategoryBackground">
            {({ field }) => (
              <FileInput
                label="SubCategory Image"
                accept="image/*"
                placeholder="Add Image Here"
                value={field.value}
                onChange={(value) => {
                  field.onChange({
                    target: {
                      name: field.name,
                      value: value,
                    },
                  });
                  handleImageChange(value);
                }}
              />
            )}
          </Field>
          <Button type="submit" variant="filled">
            Submit
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default AddSubCategoryPage;
