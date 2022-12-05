import {
  Button,
  Checkbox,
  FileInput,
  Modal,
  MultiSelect,
  TextInput,
} from "@mantine/core";

import { useForm } from "@mantine/form";

const StudentFormModal = ({
  opened,
  setOpened,
  selectedStudent,
}: {
  opened: any;
  setOpened: any;
  selectedStudent: any;
}) => {
  // Hook to handle form values
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      isRep: false,
      selectedEvents: [],
      idUrl: "",
      payUrl: "",
    },
  });

  const data = [
    { value: "1", label: "Debug" },
    { value: "2", label: "Paper Presentation" },
    { value: "3", label: "Quiz" },
    { value: "4", label: "Meme Making" },
    { value: "5", label: "Treasure Hunt" },
    { value: "6", label: "App UI design" },
    { value: "7", label: "Web UI design" },
  ];

  const handleClose = () => {
    setOpened(false);
  };

  const handleSubmit = () => {
    // todo: save data
    // todo: close modal
    // setOpened(false);
    console.log(form.values);
  };

  return (
    <Modal
      closeOnClickOutside={false}
      onClose={handleClose}
      opened={opened}
      title="Add Student"
      size="xl"
    >
      {/* Following form should be loaded iff */}
      <form>
        <TextInput
          required
          label="Name"
          name="name"
          placeholder="Name"
          mt="md"
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          placeholder="Email"
          required
          mt="md"
          {...form.getInputProps("email")}
        />
        <TextInput
          label="Phone"
          placeholder="Phone"
          required
          mt="md"
          {...form.getInputProps("phone")}
        ></TextInput>
        <Checkbox
          label="Is Representative?"
          mt="md"
          {...form.getInputProps("isRep", { type: "checkbox" })}
        />
        <MultiSelect
          data={data}
          label="Which events are you participating?"
          placeholder="Choose events"
          mt="md"
          {...form.getInputProps("selectedEvents")}
        />
        <FileInput
          placeholder="Pick file"
          label="ID or Bonafide"
          mt="md"
          required
          {...form.getInputProps("idUrl")}
        ></FileInput>
        <FileInput
          placeholder="Pick file"
          label="Payment Proof"
          mt="md"
          required
          {...form.getInputProps("payUrl")}
        ></FileInput>
        <Button mt="md" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default StudentFormModal;
