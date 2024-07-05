import {
  Button,
  FileInput,
  Group,
  Image,
  Select,
  TextInput,
} from "@mantine/core";
import { useEffect, useState } from "react";
import {
  useAddSubcategoryMutation,
  useUploadImageMutation,
} from "../../utility/services/admin.service";
import { useForm } from "@mantine/form";
import { ISubCategories } from "../../../user/utility/models/user.model";
import { useGetCategoriesQuery } from "../../../user/utility/services/user.service";

const ManageSubcategories = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadImage, { isLoading: isUploading }] = useUploadImageMutation();
  const [addSubCategory] = useAddSubcategoryMutation();
  const { data } = useGetCategoriesQuery();
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      const updatedData = Object.values(data).map(
        (item: any, index: number) => {
          const key = Object.keys(data)[index];
          return {
            value: key,
            label: item.name,
          };
        }
      );
      setCategories(updatedData);
    }
  }, [data]);

  const subCategoryForm = useForm({
    initialValues: {
      categoryId: "",
      subCategoryName: "",
      subCategoryBackground: "",
    },
  });
  const handleUpload = async (file: File | null) => {
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      const downloadURL = await uploadImage(file).unwrap();
      subCategoryForm.setFieldValue("subCategoryBackground", downloadURL);
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

  const handleSubmit = async (values: ISubCategories) => {
    console.log(values);

    await addSubCategory({
      categoryId: values.categoryId,
      name: values.subCategoryName,
      imageUrl: values.subCategoryBackground,
    }).unwrap();
  };
  return (
    <form onSubmit={subCategoryForm.onSubmit(handleSubmit)}>
      <Select
        label="Select Category"
        placeholder="Select Category"
        data={categories}
        {...subCategoryForm.getInputProps("categoryId")}
      />
      <TextInput
        withAsterisk
        label="Subcategory Name"
        placeholder="Subcategory Name"
        {...subCategoryForm.getInputProps("subCategoryName")}
      />
      <FileInput
        label="Subcategory Image"
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

export default ManageSubcategories;
