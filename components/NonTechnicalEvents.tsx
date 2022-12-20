import Link from "next/link";
import React from "react";
import styles from "../styles/NonTechnicalEvents.module.css";

const NonTechnicalEvents = () => {
  return (
    <div className={styles.parent}>
      <h2 className={styles.eventHeader}>Non-Technical Events</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>01</h2>
              <h3>The Brain Hunt</h3>
              <p>Clear vision holds the key</p>
              <Link href="/rules#brain-hunt" legacyBehavior>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>02</h2>
              <h3>Connectiva</h3>
              <p>Not just nearly connect, but really connect</p>
              <Link href="/rules#connectiva" legacyBehavior>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>03</h2>
              <h3>Portmantaeu</h3>
              <p>Lorem ipsum dolor sit amet. And some other contents</p>
              <Link href="/rules#portmantaeu" legacyBehavior>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>04</h2>
              <h3>Dumb C</h3>
              <p>Lorem ipsum dolor sit amet. And some other contents</p>
              <Link href="/rules#dumb-c" legacyBehavior>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonTechnicalEvents;
