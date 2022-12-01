import { Button, FileInput, MantineProvider, PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import { Plus, Send, Share } from 'tabler-icons-react';
import StudentList from '../components/StudentList';

export default function Home() {
    return (
    <Stack className='registration-container' spacing={'sm'}>
        <div style={{textAlign: "center"}}>
            <h2>Register for Events!</h2>
        </div>
        <TextInput label="College" placeholder='Name of the College' required mt="md"></TextInput>
        <TextInput label="Department" placeholder='Name of Department' required mt="md"></TextInput>
        <TextInput label="Staff In-charge Name" placeholder='Staff Name' mt="md"></TextInput>
        <TextInput label="Staff In-charge Phone" placeholder='Staff Contact Number' mt="md"></TextInput>
        <div>
            <h4>Student Details</h4>
            <StudentList />
            <div 
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}>
                <Button variant='light' leftIcon={<Plus />} style={{maxWidth: "150px"}}>Add Student</Button>
                <Button leftIcon={<Send />}>Submit</Button>
            </div>
        </div>
    </Stack>
  );
}