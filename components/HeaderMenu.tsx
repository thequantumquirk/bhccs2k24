import {
  createStyles,
  Header,
  Group,
  Burger,
  Container,
  Transition,
  Paper,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
// import { MantineLogo } from "@mantine/ds";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: "#013e6a",
    borderBottom: 0,
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 3,
    borderWidth: 0,
    borderRadius: 0,
    overflow: "hidden",
    color: "#fff",
    backgroundColor: "#013e6a",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "#fff",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: "#9fc3dd",
      color: "#000",
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export function HeaderMenu({ links }: HeaderSearchProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => {
          close();
        }}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} className={classes.header}>
      <Container>
        <div className={classes.inner}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image src={"/bhclogo.png"} alt="BHC logo" width={40} height={50} />
            <h1 style={{ marginLeft: "20px", fontSize: "20px", color: "#fff" }}>
              Tech-Pinnacle 2k24
            </h1>
          </div>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </div>
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
