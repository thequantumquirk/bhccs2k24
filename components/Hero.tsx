import {
  Title,
  Container,
  Button,
  Overlay,
  createStyles,
  Image,
} from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
import heroStyles from "../styles/Hero.module.css";
import RegistrationOpenModal from "./RegistrationOpenModal";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 60,
    paddingBottom: 40,
    backgroundImage:
      "url(https://ik.imagekit.io/vrx5mduvl/background.png?updatedAt=1705493408469)",
    backgroundSize: "100% 100%",

    backgroundPosition: "center",

    "@media (max-width: 520px)": {
      paddingTop: 40,
      paddingBottom: 50,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 500,
    fontSize: 30,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 20,
    },
  },

  symposium_name: {
    fontWeight: 800,
    fontSize: 50,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 45,
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    "@media (max-width: 520px)": {
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

const Hero = () => {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  const handleRegister = (event: any) => {
    event.preventDefault();
    setOpened(true);
    // router.push("https://forms.gle/RhncJLaep6g2PYw87");
  };

  const handleViewRules = (event: any) => {
    event.preventDefault();
    router.push("/rules");
  };

  return (
    <div className={classes.wrapper}>
      <Overlay color="#222" opacity={0.4} zIndex={1} />

      <div className={classes.inner}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            src={"/bhclogo.png"}
            alt="BHC college logo"
            width={80}
            height={100}
          />
        </div>

        <Title className={classes.title}>Bishop Heber College</Title>

        <Title className={classes.title}>
          Department of Computer Science (SHIFT - I)
        </Title>
        <Title className={classes.title}>proudly presents</Title>
        <Title className={classes.title}>
          A State Level Technical Symposium
        </Title>

        {/* <Container size={640}>
          <Text size="lg" className={classes.description}>
            Proudly presents a state level Technical Symposium
          </Text>
        </Container> */}

        <Container
          style={{
            textAlign: "center",
            fontSize: 50,
          }}
        >
          <h1 className={heroStyles.neonText}>Tech-Pinnacle 2k24</h1>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            onClick={handleRegister}
            variant="white"
            size="lg"
          >
            Register
          </Button>
          <Button
            onClick={handleViewRules}
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
          >
            View Rules
          </Button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1
            style={{
              textAlign: "center",
              backgroundColor: "#ea3d3a",
              width: "fit-content",
              padding: "0.25rem",
              borderRadius: "0.25rem",
            }}
          >
            Last Date for the Registration has been extended to{" "}
            <i>10/02/2024</i>
          </h1>
        </div>
      </div>
      <RegistrationOpenModal opened={opened} setOpened={setOpened} />
    </div>
  );
};

export default Hero;
