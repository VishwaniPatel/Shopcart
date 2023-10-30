import { Button, Container, FileInput, Text, TextInput } from "@mantine/core";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { addCategory } from "../service/ProductDataService";

const AddCategoryPage = () => {
  const [categoryImage, setCategoryImage] = useState("");
  const handleSubmit = (values) => {
    const category = {
      ...values,
      categoryBackground: categoryImage,
    };
    console.log(category);
    addCategory(category);
  };
  const handleImageChange = (event) => {
    const file = event;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        const fileName = file.name; // Get the file name

        setCategoryImage(base64Image);
      };
      reader.readAsDataURL(file);
    } else {
      console.log("No file selected");
    }
  };
  return (
    <Container>
      <Text size={30} fw={500} p={20} color="white">
        Manage Category
      </Text>
      <Formik
        initialValues={{
          category: "",
          categoryBackground: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="category">
            {({ field }) => (
              <TextInput
                {...field}
                type="text"
                label="Category Label"
                placeholder="Enter Category Label"
              />
            )}
          </Field>
          <Field name="categoryBackground">
            {({ field }) => (
              <FileInput
                label="Category Image"
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

export default AddCategoryPage;
