import { Button, Modal } from "@mantine/core";
import { useRouter } from "next/router";

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
        <ul>
          <li style={{ marginTop: "10px" }}>
            Only the <b>Student Representative</b> of a Department should
            register for all the participants from their department.
          </li>
          <li style={{ marginTop: "10px" }}>
            UG & PG Students of <strong>CS/ APPLICATION/ IT /CSE /ITE</strong>{" "}
            and other CS related departments can participate.
          </li>
          <li style={{ marginTop: "10px" }}>
            Only <strong>15 members</strong> are allowed per department
            (Including both UG and PG).
          </li>
          <li style={{ marginTop: "10px" }}>
            Students can participate in one or two events (which can be
            Technical or Non-Technical).
          </li>
          <li style={{ marginTop: "10px" }}>
            Each participant can register in 2 events. Which can be One
            Technical and One-Non Technical...
          </li>
          <li style={{ marginTop: "10px" }}>
            The registration fee per student is <strong>Rs 200/-.</strong> The
            Representative should collect fees from all participants and{" "}
            <strong>make a single payment.</strong>
          </li>
          <li style={{ marginTop: "10px" }}>
            Use the <b>QR code / Gpay number</b> on the last page of the
            registration form to pay the fee.
          </li>
          <li style={{ marginTop: "10px" }}>
            All students&apos; <strong>IDs and payment proofs</strong> should be
            uploaded to complete registration.
          </li>
          <li style={{ marginTop: "10px" }}>
            Kindly read all the instructions thoroughly, which are mentioned in
            the Rules document, before enrolling yourself.
          </li>
          <li style={{ marginTop: "10px" }}>
            If any queries, contact student coordinators.
          </li>
        </ul>
        <div style={{ textAlign: "center" }}>
          <Button onClick={handleContinueClick}>Continue</Button>
        </div>
      </Modal>
    </div>
  );
}
