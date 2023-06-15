import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
  Image,
  BackgroundImage,
  Box,
  Flex,
} from "@mantine/core";
import offerImg from "../assets/images/offer.png";
const useStyles = createStyles((theme) => ({
  inner: {
    backgroundColor: "#003d29",
    color: "white",
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    color: "white",
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

export function OfferSection() {
  const { classes } = useStyles();
  return (
    <BackgroundImage src={offerImg} radius="sm">
      <Container size="lg">
        <Flex justify="flex-end" pt={100} pb={100}>
          <Box p={60} className={classes.inner} w={"50%"}>
            <Title className={classes.title}>
              <Text color="white">Get 5% Cash Back On $200</Text>
            </Title>

            <Text color="white" className={classes.description} mt={30}>
              Shopping is a bit of a relaxing hobby for me, which is sometimes
              troubling for the bank balance.
            </Text>
            <Button
              radius="xl"
              size="xl"
              className={classes.control}
              mt={40}
              variant="outline"
            >
              Learn More
            </Button>
          </Box>
        </Flex>
        {/* <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <Text>Shopping And Department Store.</Text>
            </Title>

            <Text className={classes.description} mt={30}>
              Shopping is a bit of a relaxing hobby for me, which is sometimes
              troubling for the bank balance.
            </Text>
            <Button
              radius="xl"
              size="xl"
              color="#2B8A3E"
              className={classes.control}
              mt={40}
            >
              Learn More
            </Button>
          </div>
        </div> */}
      </Container>
    </BackgroundImage>
  );
}
