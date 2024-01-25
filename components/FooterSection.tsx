import { createStyles, Group, ActionIcon, Button } from "@mantine/core";
import { useRouter } from "next/router";
import {
  IconBrandGoogleMaps,
  IconBrandInstagram,
  IconDownload,
  IconFileInfo,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    padding: "0 5rem",
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
    router.push("https://www.hostize.com/d/sfUWmNPJYJ/file.pdf");
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
    window.open("https://www.instagram.com/tech_pinnacle_2k24/", "_blank");
  };

  const handleMapsClick = () => {
    window.open("https://maps.app.goo.gl/vrb21u9nvpc3v3cC8", "_blank");
  };

  const items = (
    <>
      <Button
        className={classes.downloadButton}
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
        leftIcon={<IconDownload />}
        onClick={handleDownloadBrochure}
      >
        Brochure
      </Button>
      <Button
        className={classes.downloadButton}
        variant="gradient"
        gradient={{ from: "teal", to: "lime", deg: 105 }}
        leftIcon={<IconDownload />}
        onClick={handleDownloadTimeSchedule}
      >
        Time Schedule
      </Button>
      <Button
        className={classes.downloadButton}
        variant="gradient"
        gradient={{ from: "orange", to: "red", deg: 105 }}
        leftIcon={<IconDownload />}
        onClick={handleDownloadRules}
      >
        Rules
      </Button>
      <Button
        className={classes.downloadButton}
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        leftIcon={<IconDownload />}
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
        <div>
          <h3>Tech-Pinnacle</h3>
          <p>
            <span style={{ fontWeight: "bold" }}>Email: </span>
            <span
              style={{ cursor: "pointer", color: "#ADD8E6" }}
              onClick={() => {
                window.location.href = "mailto:techpinnacle2k24@gmail.com";
              }}
            >
              techpinnacle2k24@gmail.com
            </span>
          </p>
        </div>

        {/* <Group className={classes.links}>{items}</Group> */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <Group spacing="xs" position="right" noWrap>
            <ActionIcon
              size="lg"
              variant="default"
              radius="xl"
              onClick={handleInstaClick}
            >
              <IconBrandInstagram size={18} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              variant="default"
              radius="xl"
              onClick={handleMapsClick}
            >
              <IconBrandGoogleMaps size={18} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              variant="default"
              radius="xl"
              onClick={handleDownloadBrochure}
            >
              <IconFileInfo size={18} />
            </ActionIcon>
          </Group>
          <div>
            <b>Bishop Heber College</b>
            <br /> Post Box No. 615,
            <br /> Tiruchirappalli - 620 017
            <br /> Tamil Nadu, South India.
          </div>
        </div>
      </div>
    </div>
  );
}
