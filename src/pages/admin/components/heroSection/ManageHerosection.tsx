import { useState } from "react";
import {
  useAddHeroSectionMutation,
  useUploadImageMutation,
} from "../../utility/services/admin.service";
import { useForm } from "@mantine/form";
import { Button, FileInput, Group, Image, TextInput } from "@mantine/core";

const ManageHerosection = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadImage, { isLoading: isUploading }] = useUploadImageMutation();
  const [addHeroSection] = useAddHeroSectionMutation();
  const heroSectionForm = useForm({
    initialValues: {
      title: "",
      subtitle: "",
      herosectionBackground: "",
    },
  });
  const handleUpload = async (file: File | null) => {
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      const downloadURL = await uploadImage(file).unwrap();
      heroSectionForm.setFieldValue("herosectionBackground", downloadURL);
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
  const handleSubmit = async (values: {
    title: string;
    subtitle: string;
    herosectionBackground: string;
  }) => {
    await addHeroSection({
      title: values.title,
      subtitle: values.subtitle,
      imageUrl: values.herosectionBackground,
    }).unwrap();
  };
  return (
    <form onSubmit={heroSectionForm.onSubmit(handleSubmit)}>
      <TextInput
        withAsterisk
        label="Hero Section Title"
        placeholder="Hero Section Title"
        {...heroSectionForm.getInputProps("title")}
      />
      <TextInput
        withAsterisk
        label="Hero Section Subtitle"
        placeholder="Hero Section Subtitle"
        {...heroSectionForm.getInputProps("subtitle")}
      />
      <FileInput
        label="Hero Section Image"
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

export default ManageHerosection;
