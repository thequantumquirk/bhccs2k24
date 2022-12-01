import { Button, Checkbox, FileInput, Modal, MultiSelect, PasswordInput, Switch, TextInput } from "@mantine/core";
import { useState } from "react";
import { Plus } from "tabler-icons-react";
import styles from "../styles/CollegeTitle.module.css";

const StudentForm = () => {
  const [opened, setOpened] = useState(false);

  const data = [
    { value: '1', label: 'Debug' },
    { value: '2', label: 'Paper Presentation' },
    { value: '3', label: 'Quiz' },
    { value: '4', label: 'Meme Making' },
    { value: '5', label: 'Treasure Hunt' },
    { value: '6', label: 'App UI design' },
    { value: '7', label: 'Web UI design' },
  ];
    return (
    <>
        <Modal
            closeOnClickOutside={false}
            onClose = { () => setOpened(false) }
            opened = {opened}
            title = "Add Student"
            size = "xl"
        >
            {/* Following form should be loaded iff */}
            <form>
                <TextInput label="Name" name="name" placeholder='Name' required mt="md"></TextInput>
                <TextInput label="Email" placeholder='Email' required mt="md"></TextInput>
                <TextInput label="Phone" placeholder='Phone' required mt="md"></TextInput>
                <Checkbox
                    label="Is Representative?"
                    mt="md"
                />
                <MultiSelect
                    data={data}
                    label="Which events are you participating?"
                    placeholder="Choose events"
                    mt="md"
                />
                <FileInput placeholder="Pick file" label="ID or Bonafide" mt="md" withAsterisk></FileInput>
                <FileInput placeholder="Pick file" label="Payment Proof" mt="md" withAsterisk></FileInput>
                <Button mt="md" type='submit'>Submit</Button>
            </form>
        </Modal>

        <Button onClick={() => setOpened(true)} variant='light' leftIcon={<Plus />}>Add Student</Button>
    </>
  );
};

export default StudentForm;
