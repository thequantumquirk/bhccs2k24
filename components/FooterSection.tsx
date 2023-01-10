import { createStyles, Anchor, Group, ActionIcon, Button } from "@mantine/core";
import Router, { useRouter } from "next/router";
import {
  BrandTwitter,
  BrandYoutube,
  BrandInstagram,
  Download,
} from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  links: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
      flexDirection: "column",
    },
  },

  downloadButton: {
    [theme.fn.smallerThan("sm")]: {
      width: "200px",
    },
  },
}));

export function FooterSection() {
  const { classes } = useStyles();
  const router = useRouter();

  const handleDownloadBrochure = () => {
    router.push(
      "https://drive.google.com/file/d/1uRNvRRQ4psIOsZK7iP9KIaTKYKV8lisI/view?usp=share_link"
    );
  };

  const handleDownloadRules = () => {
    router.push(
      "https://drive.google.com/file/d/105laO1_cPWSM5YzmaqpRwCss0AvihxPp/view?usp=share_link"
    );
  };

  const handleDownloadTimeSchedule = () => {
    router.push(
      "https://drive.google.com/file/d/19D7LNFPhGcBigp5kxIj682Eq4KXqWSNZ/view?usp=share_link"
    );
  };

  const handleGPSCamDemo = () => {
    router.push(
      "https://drive.google.com/file/d/1MZ_mRiCxBThIbUuAaj6pDRx66s4HoIvT/view?usp=share_link"
    );
  };

  const handleInstaClick = () => {
    router.push("https://instagram.com/hybernetix_2k23?igshid=OGQ2MjdiOTE=");
  };

  const items = (
    <>
      <Button
        className={classes.downloadButton}
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
        leftIcon={<Download />}
        onClick={handleDownloadBrochure}
      >
        Brochure
      </Button>
      <Button
        className={classes.downloadButton}
        variant="gradient"
        gradient={{ from: "teal", to: "lime", deg: 105 }}
        leftIcon={<Download />}
        onClick={handleDownloadTimeSchedule}
      >
        Time Schedule
      </Button>
      <Button
        className={classes.downloadButton}
        variant="gradient"
        gradient={{ from: "orange", to: "red", deg: 105 }}
        leftIcon={<Download />}
        onClick={handleDownloadRules}
      >
        Rules
      </Button>
      <Button
        className={classes.downloadButton}
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        leftIcon={<Download />}
        onClick={handleGPSCamDemo}
      >
        GPS Camera Demo
      </Button>
    </>
  );

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <h3>Hybernetix</h3>

        <Group className={classes.links}>{items}</Group>

        <Group spacing="xs" position="right" noWrap>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            onClick={handleInstaClick}
          >
            <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
