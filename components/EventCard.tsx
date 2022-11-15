import { Card, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    eventCard: {
        background: theme.fn.linearGradient(45, '#3457D5', '#00BFFF'),
    },
    eventTitle: {
        color: "white"
    },
    eventDescription: {
        color: "white"
    }
}));

const EventCard = ({ event } : { event : any }) => {
  const { classes, cx } = useStyles();

  return (
    <Card className={classes.eventCard} shadow="sm" p="lg" radius="md" withBorder style={{minHeight: "100px"}}>
        <Text className={classes.eventTitle} size={"xl"} weight={500}>{ event.title }</Text>
        <Text className={classes.eventDescription} size="md" color="dimmed">{ event.description }</Text>
    </Card>
  );
};

export default EventCard;
