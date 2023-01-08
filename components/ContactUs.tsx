import styles from "../styles/ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.parent}>
      <h2 className={styles.eventHeader}>Contact Us</h2>
      <div className={styles.container}>
        <p>If you need any clarifications, feel free to contact us.</p>
        <div className={styles.cardContainer}>
          <h4>Staff Coordinators</h4>
          <div className={styles.card}>
            <p className={styles.name}>Dr. Ramah Sivakumar</p>
            <p className={styles.name}>Prof.L.Priscilla</p>
            <p className={styles.name}>Prof.G.Lavanya</p>
          </div>

          <h4>Student Coordinators</h4>
          <div className={styles.card}>
            <div>
              <p className={styles.name}>Mohammed Riyas</p>
              <p className={styles.phone}>8428764096</p>
            </div>
            <hr style={{ width: "50px" }} />
            <div>
              <p className={styles.name}>Hemadharshini</p>
              <p className={styles.phone}>8807087683</p>
            </div>
            <hr style={{ width: "50px" }} />
            <div>
              <p className={styles.name}>S.Dinesh</p>
              <p className={styles.phone}>9952702570</p>
            </div>
          </div>

          <h4>Student Coordinator (Online Events)</h4>
          <div className={styles.card}>
            <div>
              <p className={styles.name}>R.Devi Praseetha</p>
              <p className={styles.phone}>7094310692</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
