import { IconEye, IconMessageCircle } from "@tabler/icons-react";
import {
  Card,
  Text,
  Group,
  Center,
  createStyles,
  getStylesRef,
  rem,
  Box,
  BackgroundImage,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(226),

    [`&:hover .${getStylesRef("image")}`]: {
      transform: "scale(1.03)",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export function ImageCard({ cardData }) {
  const { classes, theme } = useStyles();

  return (
    <BackgroundImage src={cardData.backgroundImg} radius="lg">
      <div className={classes.card}>
        <Text size="xl" weight={700} color="white">
          {cardData.category}
        </Text>
      </div>
    </BackgroundImage>
  );
}
