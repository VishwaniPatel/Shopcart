import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
  Image,
  BackgroundImage,
} from "@mantine/core";
import HeroImg from "../assets/images/HeroImage.jpg";
const useStyles = createStyles((theme) => ({
  root: {
    backgroundSize: "cover",
    backgroundPosition: "center",

    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: "#033d2a",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: "#333",
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),
    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));

export function HeroImageRight() {
  const { classes } = useStyles();
  return (
    <BackgroundImage src={HeroImg} radius="sm">
      <div className={classes.root}>
        <Container size="lg">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                <Text>Shopping And Department Store.</Text>
              </Title>

              <Text className={classes.description} mt={30}>
                Shopping is a bit of a relaxing hobby for me, which is sometimes
                troubling for the bank balance.
              </Text>
              <Button radius="xl" size="xl" className={classes.control} mt={40}>
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </BackgroundImage>
  );
}
