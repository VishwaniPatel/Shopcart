import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

const SearchInput = () => {
  return (
    <Input placeholder="Search Product" radius="lg" icon={<IconSearch />} />
  );
};

export default SearchInput;
