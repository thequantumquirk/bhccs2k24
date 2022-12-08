import { Button, createStyles, Stack, TextInput } from "@mantine/core";
import { useState } from "react";
import { Plus, Send } from "tabler-icons-react";
import StudentFormModal from "../components/StudentFormModal";
import StudentList from "../components/StudentList";

const useStyles = createStyles((theme) => ({
  container: {
    margin: "3% 15%",

    "@media (max-width: 960px)": {
      margin: "2% 5%",
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export default function Register() {
  const { classes, cx } = useStyles();
  const [opened, setOpened] = useState(false);

  const handleAddStudent = () => {
    setOpened(true);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Register for Events!</h2>
      </div>
      <Stack className={classes.container} spacing={"sm"}>
        <TextInput
          label="College"
          placeholder="Name of the College"
          required
          mt="md"
        ></TextInput>
        <TextInput
          label="Department"
          placeholder="Name of Department"
          required
          mt="md"
        ></TextInput>
        <TextInput
          label="Staff In-charge Name"
          placeholder="Staff Name"
          mt="md"
        ></TextInput>
        <TextInput
          label="Staff In-charge Phone"
          placeholder="Staff Contact Number"
          mt="md"
        ></TextInput>
        <div>
          <h4>Student Details</h4>
          <StudentList />
          <div className={classes.controls}>
            <Button
              onClick={handleAddStudent}
              variant="light"
              leftIcon={<Plus />}
              className={classes.control}
            >
              Add Student
            </Button>
            <Button leftIcon={<Send />} className={classes.control}>
              Submit
            </Button>
          </div>
        </div>
        <StudentFormModal
          opened={opened}
          setOpened={setOpened}
          selectedStudent={null}
        />
      </Stack>
    </>
  );
}
