import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const SearchInput = () => {
  return (
    <Input
      placeholder="Search Product"
      radius="lg"
      leftSection={<IconSearch />}
    />
  );
};

export default SearchInput;
