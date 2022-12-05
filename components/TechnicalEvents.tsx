import styles from "../styles/TechnicalEvents.module.css";

const TechnicalEvents = () => {
  const bugSmashing = {
    title: "#1 Bug Smashing",
    description: "This is some catch-phrase regarding Bug Smashing",
  };

  return (
    <div className={styles.parent}>
      <h2 className={styles.eventHeader}>Technical Events</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>01</h2>
              <h3>Bug Smashing</h3>
              <p>Lorem ipsum dolor sit amet. And some other contents</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>02</h2>
              <h3>Paperix</h3>
              <p>Lorem ipsum dolor sit amet. And some other contents</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>03</h2>
              <h3>Quizzy</h3>
              <p>Lorem ipsum dolor sit amet. And some other contents</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>04</h2>
              <h3>Color Castel</h3>
              <p>Lorem ipsum dolor sit amet. And some other contents</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>05</h2>
              <h3>Andro Design</h3>
              <p>Lorem ipsum dolor sit amet. And some other contents</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalEvents;
