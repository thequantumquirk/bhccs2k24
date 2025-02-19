import styles from "../styles/ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.parent}>
      <h2 className={styles.eventHeader}>Contact Us</h2>
      <div className={styles.container}>
        <p>If you need any clarifications, feel free to contact us.</p>
        <div className={styles.cardContainer}>
          <h4>Student Coordinators</h4>
          <div className={styles.card}>
            <div>
              <p className={styles.name}>D. Calvin</p>
              <p className={styles.phone}>6374370428</p>
            </div>
            <hr style={{ width: "50px" }} />
            <div>
              <p className={styles.name}>M. Monika</p>
              <p className={styles.phone}>9360232815</p>
            </div>
            <hr style={{ width: "50px" }} />
            <div>
              <p className={styles.name}>R.G. Vedhessh</p>
              <p className={styles.phone}>9489411005</p>
            </div>
          </div>
          <h4>Staff Coordinators</h4>
          <div className={styles.card}>
            <p className={styles.name}>
              Dr. Ramah Sivakumar - Assistant Professor
            </p>
            <p className={styles.phone}>9600779272</p>
            <hr style={{ width: "50px" }} />
            <p className={styles.name}>
              Prof. P. Velmurugan - Assistant Professor
            </p>
            <p className={styles.phone}>8110982923</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
