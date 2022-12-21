import Link from "next/link";
import styles from "../styles/OnlineEvents.module.css";

const OnlineEvents = () => {
  return (
    <div className={styles.parent}>
      <h2 className={styles.eventHeader}>Online Events</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>01</h2>
              <h3>Insignia</h3>
              <p>Logo Design</p>
              <Link href="/rules#insignia" legacyBehavior>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>02</h2>
              <h3>Media Raft</h3>
              <p>Multimedia</p>
              <Link href="/rules#media-raft" legacyBehavior>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>03</h2>
              <h3>Craze-Fabr</h3>
              <p>Meme Creation</p>
              <Link href="/rules#craze-fabr" legacyBehavior>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>04</h2>
              <h3>Photostratus</h3>
              <p>Photography</p>
              <Link href="/rules#photostratus" legacyBehavior>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineEvents;
