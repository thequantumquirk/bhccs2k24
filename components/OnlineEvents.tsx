import { Grid, Container } from "@mantine/core";
import EventCard from "./EventCard";

const OnlineEvents = () => {
  const bugSmashing = {
    title: "#1 Bug Smashing",
    description: "This is some catch-phrase regarding Bug Smashing"
  };

  return (
    <div>
      <Container>
        <h2 style={{textAlign: "center"}}>Online Events</h2>
      
        <Grid>
            <Grid.Col sm={6} md={4} lg={4}>
              <EventCard event={bugSmashing} />
            </Grid.Col>
            <Grid.Col sm={6} md={4} lg={4}>
              <EventCard event={bugSmashing} />
            </Grid.Col>
            <Grid.Col sm={6} md={4} lg={4}>
              <EventCard event={bugSmashing} />
            </Grid.Col>
            <Grid.Col sm={6} md={4} lg={4}>
              <EventCard event={bugSmashing} />
            </Grid.Col>
            <Grid.Col sm={6} md={4} lg={4}>
              <EventCard event={bugSmashing} />
            </Grid.Col>
        </Grid>

      </Container>  
    </div>
  );
};

export default OnlineEvents;
