import styles from "../styles/ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.parent}>
      <h2 className={styles.eventHeader}>Contact Us</h2>
      <div className={styles.container}>
        <p>If you need any clarifications, feel free to contact us.</p>
        <div className={styles.cardContainer}>
          <h4>Staff Coordinator</h4>
          <div className={styles.card}>
            <p className={styles.name}>Prof.L.Priscilla</p>
            <p className={styles.phone}>9876543210</p>
          </div>

          <h4>Student Coordinators</h4>
          <div className={styles.card}>
            <p className={styles.name}>Mohammed Riyas</p>
            <p className={styles.phone}>9876543210</p>
          </div>
          <div className={styles.card}>
            <p className={styles.name}>Hemadharshini</p>
            <p className={styles.phone}>9876543210</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
