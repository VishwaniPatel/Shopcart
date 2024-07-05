import { Button, FileInput, Group, Image, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import {
  useAddCategoryMutation,
  useUploadImageMutation,
} from "../../../admin/utility/services/admin.service";
import { ICategories } from "../../../user/utility/models/user.model";

const ManageCategories = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadImage, { isLoading: isUploading }] = useUploadImageMutation();
  const [addCategory] = useAddCategoryMutation();
  const categoryForm = useForm({
    initialValues: {
      categoryName: "",
      categoryBackground: "",
    },
  });

  const handleUpload = async (file: File | null) => {
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      const downloadURL = await uploadImage(file).unwrap();
      categoryForm.setFieldValue("categoryBackground", downloadURL);
    } else {
      setImagePreview(null);
    }
  };
  const handleFileChange = (file: File | null) => {
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      handleUpload(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (values: ICategories) => {
    await addCategory({
      name: values.categoryName,
      imageUrl: values.categoryBackground,
    }).unwrap();
  };

  return (
    <form onSubmit={categoryForm.onSubmit(handleSubmit)}>
      <TextInput
        withAsterisk
        label="Category Name"
        placeholder="Category Name"
        {...categoryForm.getInputProps("categoryName")}
      />
      <FileInput
        label="Category Image"
        accept="image/*"
        placeholder="Add Image Here"
        onChange={(file) => handleFileChange(file)}
      />

      {imagePreview && (
        <Image
          src={imagePreview}
          alt="Image Preview"
          width={100}
          height={100}
          mt="md"
        />
      )}
      <Group mt="md">
        <Button type="submit" disabled={isUploading}>
          Submit
        </Button>
      </Group>
    </form>
  );
};

export default ManageCategories;
