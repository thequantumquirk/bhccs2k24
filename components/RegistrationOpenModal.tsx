import { Button, Modal } from "@mantine/core";
import { useRouter } from "next/router";
import { generalRules } from "../globals/constants";

export default function RegistrationOpenModal({
  opened,
  setOpened,
}: {
  opened: any;
  setOpened: any;
}) {
  // const title = "Registration isn't open yet";
  // const message = "Registration will be opened on 27th, December";
  // return (
  //   <Modal opened={opened} onClose={() => setOpened(false)} title={title}>
  //     <Text fz="lg">{message}</Text>
  //   </Modal>
  // );

  const router = useRouter();

  const handleContinueClick = () => {
    router.push(
      "https://docs.google.com/forms/d/e/1FAIpQLSc47-pobqRnV34YtZPW3hoap4XZEvJMadPN-TT3AxWJuv0KYg/viewform"
    );
  };

  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Instructions"
        size={"lg"}
      >
        {generalRules.map((rule, id) => (
          <li style={{ marginBottom: "0.5rem" }} key={id}>
            {rule}
          </li>
        ))}
        <div style={{ textAlign: "center" }}>
          <Button onClick={handleContinueClick}>Continue</Button>
        </div>
      </Modal>
    </div>
  );
}
