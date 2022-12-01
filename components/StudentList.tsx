import { ActionIcon, Badge, Button, createStyles, ScrollArea, Table } from "@mantine/core";
import { Edit, Sun, Trash } from "tabler-icons-react";
import styles from "../styles/StudentList.module.css";

const StudentList = () => {
    const students = [
        { name: "Seneca",
          events: [
            {id: 1, name: "Debugging"},
            {id: 2, name: "Treasure Hunt"}
          ],
          email: 'seneca@gmail.com',
          phone: '9876543210' },
          { name: "Marcus Aurelius",
          events: [
            {id: 1, name: "Debugging"},
            {id: 2, name: "Treasure Hunt"},
            {id: 3, name: "Spelling Bee"},
            {id: 3, name: "Spelling Bee"},
          ],
          email: 'marcus.aurelius@gmail.com',
          phone: '9876543210' },
    ];
    
    const rows = students.map((stud) => (
        <tr key={stud.phone}>
          <td>{stud.name}</td>
          <td>{stud.email}</td>
          <td>{stud.phone}</td>
          <td
            style={{maxWidth: "200px"}}
          >{stud.events.map((ev) => (
                <Badge key={ev.id}>{ev.name}</Badge>)
              )}</td>
          <td>
            <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}>
                <ActionIcon variant="subtle" style={{display: "inline"}}><Edit /></ActionIcon>
                <ActionIcon variant="subtle" style={{display: "inline", marginLeft: "20px"}}><Trash /></ActionIcon>
            </div>
          </td>
        </tr>
      ));
    
      return (
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
      );
};

export default StudentList;
