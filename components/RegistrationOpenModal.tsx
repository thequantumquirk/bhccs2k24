import { Modal, Text } from "@mantine/core";
import React from "react";

export default function RegistrationOpenModal({
  opened,
  setOpened,
}: {
  opened: any;
  setOpened: any;
}) {
  const title = "Registration isn't open yet";
  const message = "Registration will be opened on 27th, December";

  return (
    <Modal opened={opened} onClose={() => setOpened(false)} title={title}>
      <Text fz="lg">{message}</Text>
    </Modal>
  );
}
