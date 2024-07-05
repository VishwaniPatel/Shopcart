import { BackgroundImage, Box, Center, Title } from "@mantine/core";
import { ICategories } from "../utility/models/user.model";
interface IProps {
  carddata: ICategories;
}

const CategoryCard = ({ carddata }: IProps) => {
  console.log(carddata);

  return (
    <Box h={200}>
      <BackgroundImage src={carddata.imageUrl} h={"100%"} radius="md">
        <Center>
          <Title mt={20} c="#fff" order={5}>
            {carddata.name}
          </Title>
        </Center>
      </BackgroundImage>
    </Box>
  );
};

export default CategoryCard;
