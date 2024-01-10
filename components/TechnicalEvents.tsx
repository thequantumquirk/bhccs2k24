import Link from "next/link";
import styles from "../styles/TechnicalEvents.module.css";
import { technicalEvents } from "../globals/constants";

const TechnicalEvents = () => {
  return (
    <div className={styles.parent}>
      <h2 className={styles.eventHeader}>Technical Events</h2>
      <div className={styles.container}>
        {technicalEvents.map((event) => (
          <div key={event.id} className={styles.card}>
            <div className={styles.box}>
              <div className={styles.content}>
                <h2>{event.id}</h2>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <Link href={`/rules#${event.slug}`} legacyBehavior>
                  <a>Read More</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalEvents;
