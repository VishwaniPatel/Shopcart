import React, { useState } from "react";

const AddProductForm = () => {
  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", image.data);
    const response = await fetch("http://localhost:5000/image", {
      method: "POST",
      body: formData,
    });
    if (response) setStatus(response.statusText);
  };
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };
  return (
    <div className="App">
      <h1>Upload to server</h1>
      {image.preview && <img src={image.preview} width="100" height="100" />}
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleFileChange}></input>
        <button type="submit" onClick={onFileUpload}>
          Submit
        </button>
      </form>
      {status && <h4>{status}</h4>}
    </div>
  );
};

export default AddProductForm;
