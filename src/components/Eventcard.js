import React from "react";
import styles from "../styles/Eventcard.module.scss";

function Eventcard() {
  return (
    <div className={styles["Event-card-container-container"]}>
      <div className={styles["Event-card-container"]}>
        <img
          src="https://aaruush22-bucket.s3.ap-south-1.amazonaws.com/events/turbodrift-4107d490.webp"
          alt=""
        />
        {/* eventcard */}
      </div>
      <button className={styles["Event-card-button"]}>Register now</button>
    </div>
  );
}

export default Eventcard;
