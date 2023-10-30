import React, { useEffect, useState } from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import { Select, TextInput, Button, FileInput, Flex } from "@mantine/core";
import * as Yup from "yup";
import useCategories from "../hook/useCategories";
import useSubCategories from "../hook/useSubcategories";
import { IconPhotoPlus } from "@tabler/icons-react";
import { addProductData } from "../service/ProductDataService";

const AddProductForm = () => {
  const category = useCategories();
  const subcategories = useSubCategories();
  const [subCategories, setSubCategories] = useState([]);
  const [value, setValue] = useState();
  const [subValue, setSubValue] = useState();
  const [images, setImages] = useState("");
  const [isAddingImage, setIsAddingImage] = useState(false);
  const [isPreviewImage, setIsPreviewImage] = useState(false);
  const [productImages, setProductImages] = useState([]);

  const initialValues = {
    productName: "",
    categoryId: "0",
    subCategoryId: "0",
    productPrice: "",
    productDescription: "",
    productQuantity: "",
    // productColor: "",
    productBrand: "",
    offerPrice: "",
    productImage: [
      {
        imageName: "",
        inputImage: "",
      },
    ],
  };

  // set value to product category selected by user, also filter subcategories for selected category
  const handleCategoryChange = (value) => {
    setValue(value);
    const subCategoryOptions = subcategories.filter(
      (subcategory) => subcategory.id === value
    );
    setSubCategories(subCategoryOptions);
    setSubValue("");
  };

  // set value to product subcategory selected by user
  const handleSubCategoryChange = (value) => {
    setSubValue(value);
  };

  // enable fields to adding image details
  const handleAddImage = () => {
    setIsAddingImage(true);
    setProductImages([...productImages, { imageName: "", inputImage: "" }]);
  };

  // remove image data on button click
  const handleRemoveImage = (index) => {
    const updatedImages = [...productImages];
    updatedImages.splice(index, 1);
    setProductImages(updatedImages);
  };

  // add product image with image name and image value
  const handleImageChange = (index, event) => {
    const file = event;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        const fileName = file.name; // Get the file name
        const updatedImages = [...productImages];
        updatedImages[index] = {
          id: Math.random(),
          imageName: images,
          inputImage: base64Image,
        };
        setProductImages(updatedImages);
      };
      reader.readAsDataURL(file);
    } else {
      console.log("No file selected");
    }
  };

  // after adding image details confirm action to store in database
  const handleConfirmAdd = (index) => {
    const updatedImages = [...productImages];
    console.log(updatedImages);
    updatedImages[index].confirmAdd = true;
    setProductImages(updatedImages);
    setIsAddingImage(false);
    setIsPreviewImage(true);
  };
  const imageNameChangeHandler = (event) => {
    const imageName = event.target.value;
    setImages(imageName);
  };

  // submit form values
  const handleSubmit = (values) => {
    const data = {
      ...values,
      productImage: productImages,
    };

    addProductData(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ values }) => (
        <Form>
          <Field name="productName">
            {({ field }) => (
              <TextInput
                {...field}
                type="text"
                label="Product Name"
                placeholder="Enter Product Name"
              />
            )}
          </Field>

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
          <Field name="subCategoryId">
            {({ field }) => (
              <Select
                {...field}
                label="Product SubCategory"
                placeholder="Select SubCategory"
                data={subCategories}
                value={field.value}
                onChange={(value) => {
                  field.onChange({
                    target: { name: field.name, value: value },
                  });
                  handleSubCategoryChange(value);
                }}
              />
            )}
          </Field>
          <Field name="productPrice">
            {({ field }) => (
              <TextInput
                {...field}
                type="number"
                label="Product Price"
                placeholder="Enter Product Price"
              />
            )}
          </Field>
          <Field name="productDescription">
            {({ field }) => (
              <TextInput
                {...field}
                type="text"
                label="Product Description"
                placeholder="Enter Product Description"
              />
            )}
          </Field>
          <Field name="productQuantity">
            {({ field }) => (
              <TextInput
                {...field}
                type="number"
                label="Product Quantity"
                placeholder="Enter Product Quantity"
              />
            )}
          </Field>
          <Field name="productBrand">
            {({ field }) => (
              <TextInput
                {...field}
                type="text"
                label="Product Brand"
                placeholder="Enter Product Brand"
              />
            )}
          </Field>
          <Field name="offerPrice">
            {({ field }) => (
              <TextInput
                {...field}
                type="text"
                label="Product Offer Price"
                placeholder="Enter Product Offer Price"
              />
            )}
          </Field>

          <div>
            {!isAddingImage && (
              <Button
                type="button"
                onClick={handleAddImage}
                leftIcon={<IconPhotoPlus />}
              >
                Add Image
              </Button>
            )}
            {isAddingImage && (
              <div>
                <FieldArray name="productImage">
                  {({ push }) => (
                    <div>
                      {productImages.map((image, index) => (
                        <div key={index}>
                          {/* Image fields */}
                          {index === productImages.length - 1 && (
                            <>
                              <Field name={`productImage[${index}].imageName`}>
                                {({ field }) => (
                                  <TextInput
                                    {...field}
                                    type="text"
                                    label="Image Name"
                                    placeholder="Enter Image Name"
                                    onChange={imageNameChangeHandler}
                                  />
                                )}
                              </Field>
                              <Field name={`productImage[${index}].inputImage`}>
                                {({ field }) => (
                                  <FileInput
                                    label="Image"
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
                                      handleImageChange(index, value);
                                    }}
                                  />
                                )}
                              </Field>
                              <Button
                                type="button"
                                onClick={() => handleConfirmAdd(index)}
                              >
                                Confirm
                              </Button>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </FieldArray>
              </div>
            )}
            {isPreviewImage && (
              <Flex gap={{ base: "sm", sm: "lg" }}>
                {/* Image previews */}
                {productImages.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image.inputImage}
                      alt={`Image ${index}`}
                      style={{ width: "100px", height: "100px" }}
                    />
                    <p>{image.imageName}</p>
                    {/* Remove button */}
                    <Button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </Flex>
            )}
          </div>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddProductForm;
