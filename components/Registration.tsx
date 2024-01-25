import { useState } from "react";
import styles from "../styles/Registration.module.css";
import RegistrationOpenModal from "./RegistrationOpenModal";
import { IconCalendar } from "@tabler/icons-react";

const Registration = () => {
  const [opened, setOpened] = useState(false);

  function handleRegister(event: any) {
    event.preventDefault();
    setOpened(true);
  }

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.eventContainer}>
          <h2>The Symposium will be held on</h2>
          <div className={styles.eventDateContainer}>
            <IconCalendar color={"#03a9f4"} className={styles.calendarIcon} />
            <p>13 Feb, 2024</p>
          </div>
        </div>
      </div>
      <RegistrationOpenModal opened={opened} setOpened={setOpened} />
    </div>
  );
};

export default Registration;
