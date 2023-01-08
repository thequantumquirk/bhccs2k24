import { ActionIcon, Avatar, Badge, Card, Group, Modal, Progress, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import { Notification } from "tabler-icons-react";

const OnSpotRegistrationModal = () => {
    const [opened, setOpened] = useState(true);

    return <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="📢 Important Announcements!"
        size={"lg"}>
        <Stack mb={"md"}>
            <Card withBorder radius="md" shadow={"sm"}>
                <Text size="lg" weight={500} >
                    Registration deadline is extended
                </Text>
                <Text size="md" color="#6F7378" mt={5}>
                    Now, the last date for registration is <b>9th Jan, 2023</b>. Registration will be closed by <b>5:00 pm.</b>
                </Text>
            </Card>
            <Card withBorder radius="md" shadow={"sm"}>
                <Text size="lg" weight={500} >
                    On Spot Registration is allowed
                </Text>
                <Text size="md" color="#6F7378" mt={10}>
                    Registration can be done on the day of event (11 Jan, 2023).
                </Text>
                <Text size="md" color="#6F7378" mt={10}>
                    On spot registration fee is <b>Rs 100/-</b> per participant. But, <b>lunch will not be provided</b> for those who registered on spot.
                </Text>
                <Text size="md" color="#6F7378" mt={10}>
                    Participants who are planning to do on spot registration should <b>contact Student Coordinator</b> beforehand
                    <li>📞 Mohammed Riyas - 8428764096</li>

                </Text>
            </Card>
            <Card withBorder radius="md" shadow={"sm"}>
                <Text size="lg" weight={500} >
                    Submission deadline for online events is extended
                </Text>
                <Text size="md" color="#6F7378" mt={5}>
                    Participants of online events can submit their work till <b>9:00 pm of 9th Jan, 2023.</b>
                </Text>
            </Card>
        </Stack>
    </Modal>
}

export default OnSpotRegistrationModal;