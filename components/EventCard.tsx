import { Card, Text } from "@mantine/core";

const EventCard = ({ event } : { event : any }) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder style={{minHeight: "100px"}}>
        <Text size={"xl"} weight={500}>{ event.title }</Text>
        <Text size="md" color="dimmed">{ event.description }</Text>
    </Card>
  );
};

export default EventCard;
