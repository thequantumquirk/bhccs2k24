import { Title, Text, Container, Button, Overlay, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 180,
    paddingBottom: 130,
    backgroundImage:
      'url(https://unsplash.com/photos/vEE00Hx5d0Q/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY4NTE1Njg2&force=true&w=1920)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    '@media (max-width: 520px)': {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 30,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 20,
    },
  },

  symposium_name: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

const Hero = () => {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Department of Computer Science
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Proudly presents a state level Technical Symposium
          </Text>
        </Container>

        <Title size={"xl"} className={classes.symposium_name}>
            Symposium Name
        </Title>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Register
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            View Rules
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;