import { ActionIcon, Button, ScrollArea, Table } from "@mantine/core";
import { Edit, Sun, Trash } from "tabler-icons-react";
import styles from "../styles/StudentList.module.css";

const StudentList = () => {
    const elements = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    ];
    
    const rows = elements.map((element) => (
        <tr key={element.name}>
          <td>{element.position}</td>
          <td>{element.name}</td>
          <td>{element.symbol}</td>
          <td>{element.mass}</td>
          <td>
            <div>
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
