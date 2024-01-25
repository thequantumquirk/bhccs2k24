import { createStyles, Text, Group } from "@mantine/core";
import { IconAt, IconPhoneCall } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
}

export function UserInfo({
  avatar,
  name,
  title,
  phone,
  email,
}: UserInfoIconsProps) {
  const { classes } = useStyles();
  return (
    <div>
      <Group noWrap>
        <div>
          <Text
            size="md"
            sx={{ textTransform: "uppercase" }}
            weight={700}
            color="dimmed"
          >
            {title}
          </Text>

          <Text size="sm" weight={500} className={classes.name}>
            {name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <IconAt size={16} className={classes.icon} />
            <Text size="sm" color="dimmed">
              {email}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <IconPhoneCall size={16} className={classes.icon} />
            <Text size="sm" color="dimmed">
              {phone}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}
