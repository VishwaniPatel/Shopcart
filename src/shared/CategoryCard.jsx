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
      transform: "scale(1.3)",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    ...theme.fn.cover(),
    ref: getStylesRef("image"),
    backgroundSize: "cover",
    transition: "transform 500ms ease",
  },

  content: {
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    zIndex: 1,
  },

  title: {
    color: theme.white,
    marginTop: rem(5),
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  author: {
    color: theme.colors.dark[2],
  },
}));

export function CategoryCard({ carddata }) {
  const { classes, theme } = useStyles();

  return (
    <>
      <Card p="lg" shadow="lg" className={classes.card} radius="md">
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${carddata?.background})` }}
        />

        <div className={classes.content}>
          <div>
            <Text size="lg" className={classes.title} weight={500}>
              {carddata?.label}
            </Text>
          </div>
        </div>
      </Card>
    </>
  );
}
