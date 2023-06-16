import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  getCategories,
  getSubCategories,
  addProductData,
} from "../service/ProductDataService";
const AddProductForm = () => {
  const [imageFile, setImageFile] = useState(null);
  const [base64String, setBase64String] = useState("");
  const [isImageValue, setIsImageValue] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      const base64String = String(reader.result);
      setBase64String(base64String);
    };
    reader.readAsDataURL(file);

    if (file) {
      setIsImageValue(true);
    }
  };
  useEffect(() => {
    console.log(base64String);
  }, [base64String]);
  return (
    <div>
      <h1>Upload an Image</h1>
      <input type="file" onChange={handleImageUpload} />

      {isImageValue && (
        <div>
          <h2>Base64 String:</h2>
          <p>{base64String}</p>
        </div>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      ></Formik>
    </div>
  );
};

export default AddProductForm;
