import { useState } from "react";
import { CalendarEvent } from "tabler-icons-react";
import styles from "../styles/Registration.module.css";
import RegistrationOpenModal from "./RegistrationOpenModal";

const Registration = () => {
  const [opened, setOpened] = useState(false);

  function handleRegister(event: any) {
    event.preventDefault();
    setOpened(true);
  }

  return (
    <div className={styles.parent}>
      <h2 className={styles.eventHeader}>Register</h2>
      <div className={styles.container}>
        <div className={styles.eventContainer}>
          <p>The Symposium will be held on</p>
          <div className={styles.eventDateContainer}>
            <CalendarEvent color={"#03a9f4"} className={styles.calendarIcon} />
            <p>13 Feb, 2024</p>
          </div>
        </div>
      </div>
      <RegistrationOpenModal opened={opened} setOpened={setOpened} />
    </div>
  );
};

export default Registration;
