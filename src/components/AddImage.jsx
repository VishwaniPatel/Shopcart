import React, { useEffect, useState } from "react";
import { Formik, Field, FieldArray, ErrorMessage, Form } from "formik";
import { Select, TextInput, Button, FileInput } from "@mantine/core";
import * as Yup from "yup";
import useCategories from "../hook/useCategories";
import useSubCategories from "../hook/useSubcategories";
import { IconPhotoPlus } from "@tabler/icons-react";

const AddProductForm = () => {
  const category = useCategories();
  const subcategories = useSubCategories();
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState();
  const [subValue, setSubValue] = useState();
  const [images, setImages] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [isAddingImage, setIsAddingImage] = useState(false);

  const initialValues = {
    productName: "",
    categoryId: "",
    subCategoryId: "",
    productPrice: "",
    productDescription: "",
    productQuantity: "",
    productColor: "",
    productBrand: "",
    offerPrice: "",
  };

  const validationSchema = Yup.object().shape({
    productName: Yup.string().required("Required"),
    categoryId: Yup.string().required("Required"),
    subCategoryId: Yup.string().required("Required"),
    productPrice: Yup.string().required("Required"),
    productDescription: Yup.string().required("Required"),
    productQuantity: Yup.string().required("Required"),
    productColor: Yup.string().required("Required"),
    productBrand: Yup.string().required("Required"),
    offerPrice: Yup.string().required("Required"),
    productImage: Yup.array().required("Required"),
  });

  const handleCategoryChange = (value) => {
    setValue(value);
    const subCategoryOptions = subcategories.filter(
      (subcategory) => subcategory.id === value
    );
    setSubCategories(subCategoryOptions);
    setSubValue("");
  };
  const handleSubCategoryChange = (value) => {
    setSubValue(value);
  };

  const handleAddImage = () => {
    setIsAddingImage(true);
  };

  const handleImageChange = (value) => {
    // console.log(file);
    const reader = new FileReader();

    reader.onload = () => {
      const base64Image = reader.result;
      setInputImage(base64Image);
    };

    if (value) {
      reader.readAsDataURL(value);
    }
  };

  const handleNameChange = (e) => {
    setInputName(e.target.value);
    console.log(inputName);
  };

  const handleConfirmAdd = () => {
    setImages((prevImages) => [
      ...prevImages,
      { name: inputName, path: inputImage },
    ]);
    setInputName("");
    setInputImage("");
    setIsAddingImage(false);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  useEffect(() => {
    console.log("Updated Images:", images);
  }, [images]);

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
  };
  useEffect(() => {
    // Simulating fetching data from the database
    setTimeout(() => {
      // Assuming `categories` is fetched and available here
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched }) => (
          <Form>
            <Field
              name="productName"
              component={TextInput}
              label="Product Name"
              placeholder="Enter Product Name"
            />

            <Field
              name="categoryId"
              component={Select}
              label="Product Category"
              placeholder="Select Category"
              data={category}
              value={value}
              onChange={handleCategoryChange}
            />

            <Field
              name="subCategoryId"
              component={Select}
              label="Product SubCategory"
              placeholder="Select SubCategory"
              data={subCategories}
              value={subValue}
              onChange={handleSubCategoryChange}
            />

            <Field
              name="productPrice"
              component={TextInput}
              type="number"
              label="Product Price"
              placeholder="Enter Product Price"
            />

            <Field
              name="productDescription"
              component={TextInput}
              type="text"
              label="Product Description"
              placeholder="Enter Product Description"
            />

            <Field
              name="productQuantity"
              component={TextInput}
              type="text"
              label="Product Quantity"
              placeholder="Enter Product Quantity"
            />
            <div>
              {!isAddingImage ? (
                <Button
                  variant="outline"
                  leftIcon={<IconPhotoPlus />}
                  type="button"
                  onClick={handleAddImage}
                >
                  Add Image of Product
                </Button>
              ) : (
                <div>
                  <Field
                    label="Enter Image Name"
                    name="inputName"
                    value={inputName}
                    component={TextInput}
                    type="text"
                    placeholder="Image Name"
                    onChange={handleNameChange}
                  />

                  <Field name="inputImage">
                    {({ field }) => (
                      <FileInput
                        {...field}
                        label="Enter Image"
                        value={inputImage}
                        accept="image/*"
                        placeholder="Add Image Here"
                        onChange={handleImageChange}
                      />
                    )}
                  </Field>

                  <Button type="button" onClick={handleConfirmAdd}>
                    Confirm
                  </Button>
                </div>
              )}
            </div>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.path}
                  alt={`Image ${index}`}
                  style={{ width: "100px", height: "100px" }}
                />
                <p>{image.name}</p>
                <Button type="button" onClick={() => handleRemoveImage(index)}>
                  Remove
                </Button>
              </div>
            ))}

            <Button type="submit" variant="filled">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProductForm;
