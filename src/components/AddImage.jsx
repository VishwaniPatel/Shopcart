import React from "react";
import { Formik, Form } from "formik";
import { Select, Button } from "@mantine/core";

const MyForm = () => {
  const handleSubmit = (values) => {
    console.log("Selected option:", values.selectedOption);
    // Rest of your form submission logic
  };

  // Define your options array
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Formik initialValues={{ selectedOption: "" }} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form>
          <Select
            value={values.selectedOption}
            onChange={(value) => setFieldValue("selectedOption", value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
