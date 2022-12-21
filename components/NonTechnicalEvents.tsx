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
              <h3>Hustle Hour</h3>
              <p>Treasure Hunt</p>
              <Link href="/rules#hustle-hour" legacyBehavior>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>02</h2>
              <h3>Pix Link</h3>
              <p>Connection</p>
              <Link href="/rules#pix-link" legacyBehavior>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>03</h2>
              <h3>Times Up</h3>
              <p>Just a Minute</p>
              <Link href="/rules#times-up" legacyBehavior>
                <a>Read More</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>04</h2>
              <h3>Dumbstruck</h3>
              <p>Dumb Charades</p>
              <Link href="/rules#dumbstruck" legacyBehavior>
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
