import { ActionIcon, Badge, ScrollArea, Table } from "@mantine/core";
import { useState } from "react";
import { Edit, Trash } from "tabler-icons-react";
import { Student, Events } from "../types/Types";
import StudentFormModal from "./StudentFormModal";

const StudentList = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [opened, setOpened] = useState(false);

  // const events =
  const students = [
    {
      id: 1,
      name: "Seneca",
      email: "seneca@gmail.com",
      phone: "9847382738",
      isRep: true,
      events: [
        { id: 1, name: "Debugging", maxPerDep: 3 },
        { id: 2, name: "Treasure Hunt", maxPerDep: 4 },
      ],
      id_proof_url: "https://someurl.com",
      pay_proof_url: "https://someurl.com",
    },
    {
      id: 2,
      name: "Seneca",
      email: "seneca@gmail.com",
      phone: "9847382738",
      isRep: true,
      events: [
        { id: 1, name: "Debugging", maxPerDep: 3 },
        { id: 2, name: "Treasure Hunt", maxPerDep: 4 },
      ],
      id_proof_url: "https://someurl.com",
      pay_proof_url: "https://someurl.com",
    },
  ];

  const rows = students.map((stud) => (
    <tr key={stud.id}>
      <td>{stud.name}</td>
      <td>{stud.email}</td>
      <td>{stud.phone}</td>
      <td style={{ maxWidth: "200px" }}>
        {stud.events.map((ev) => (
          <Badge key={ev.id}>{ev.name}</Badge>
        ))}
      </td>
      <td>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {/* <ActionIcon
            onClick={() => setSelectedStudent(stud)}
            variant="subtle"
            style={{ display: "inline" }}
          >
            <Edit />
          </ActionIcon> */}
          <ActionIcon
            variant="subtle"
            style={{ display: "inline", marginLeft: "20px" }}
          >
            <Trash />
          </ActionIcon>
        </div>
      </td>
    </tr>
  ));

  return (
    <>
      <ScrollArea sx={{ height: 300 }}>
        <Table sx={{ minWidth: 700 }} highlightOnHover striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Events</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
      <StudentFormModal
        opened={opened}
        setOpened={setOpened}
        selectedStudent={selectedStudent}
      />
    </>
  );
};

export default StudentList;
