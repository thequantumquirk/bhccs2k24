import Link from "next/link";
import styles from "../styles/TechnicalEvents.module.css";

const TechnicalEvents = () => {
  return (
    <div className={styles.parent}>
      <h2 className={styles.eventHeader}>Technical Events</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>01</h2>
              <h3>Bug Slayers</h3>
              <p>Debugging</p>
              <Link href="/rules#bug-slayers" legacyBehavior>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>02</h2>
              <h3>Paperpix</h3>
              <p>Paper Presentation</p>
              <Link href="/rules#paperpix" legacyBehavior>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>03</h2>
              <h3>Bewilder</h3>
              <p>Quiz</p>
              <Link href="/rules#bewilder" legacyBehavior>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>04</h2>
              <h3>Color Castle</h3>
              <p>Web Design</p>
              <Link href="/rules#color-castle" legacyBehavior>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>05</h2>
              <h3>Andro Design</h3>
              <p>Android UI Design</p>
              <Link href="/rules#andro-design" legacyBehavior>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalEvents;
