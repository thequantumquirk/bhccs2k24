import styles from "../styles/TechnicalEvents.module.css";
import { Card, Image, Text, Badge, Button, Group, Grid } from "@mantine/core";
import { UserInfo } from "./UserInfo";

const TechnicalEvents = () => {
  return (
    <div>
      <h2>Technical Events</h2>
      <Grid justify={"space-around"}>
            <Grid.Col style={{maxWidth: 400}} md={4} >
                <Card shadow="sm" p="lg" radius="md" withBorder>
                  <Text size={"xl"} weight={500}>Event #1</Text>
                    <ul>
                      <li>
                        <Text size="md" color="dimmed">This is rule # 1</Text>
                      </li>
                      <li>
                        <Text size="md" color="dimmed">This is rule # 2</Text>
                      </li>
                      <li>
                        <Text size="md" color="dimmed">This is rule # 3</Text>
                      </li>
                      <li>
                        <Text size="md" color="dimmed">This is rule # 4</Text>
                      </li>
                    </ul>

                    <hr />
                    <UserInfo name="Co-Ordinator" avatar="" email="someone@gmail.com" phone="927348273947" title="" />
                </Card>
            </Grid.Col>
            <Grid.Col style={{maxWidth: 400}}  md={4}>
              <Card shadow="sm" p="lg" radius="md" withBorder>
                  <Text weight={500}>Event #2</Text>
                    <ul>
                      <li>
                        <Text size="md" color="dimmed">This is rule # 1</Text>
                      </li>
                      <li>
                        <Text size="md" color="dimmed">This is rule # 2</Text>
                      </li>
                      <li>
                        <Text size="md" color="dimmed">This is rule # 3</Text>
                      </li>
                      <li>
                        <Text size="md" color="dimmed">This is rule # 4</Text>
                      </li>
                    </ul>
                    <hr />
                    <UserInfo name="Person" avatar="" email="someone@gmail.com" phone="927348273947" title="" />
              </Card>
            </Grid.Col>
            <Grid.Col style={{maxWidth: 400}}  md={4}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
                  <Text weight={500}>Event #2</Text>
                    <ul>
                      <li>
                        <Text size="md" color="dimmed">This is rule # 1</Text>
                      </li>
                      <li>
                        <Text size="md" color="dimmed">This is rule # 2</Text>
                      </li>
                      <li>
                        <Text size="md" color="dimmed">This is rule # 3</Text>
                      </li>
                      <li>
                        <Text size="md" color="dimmed">This is rule # 4</Text>
                      </li>
                    </ul>
                    <hr />
                    <UserInfo name="Co-Ordinator" avatar="" email="someone@gmail.com" phone="927348273947" title="" />
              </Card>
            </Grid.Col>
        </Grid>
    </div>
  );
};

export default TechnicalEvents;
