import React from "react";
import styles from "../styles/Footer.module.scss";

function Footer() {
  return (
    <>
      <div className={styles["footer-section"]}>
        <div>
          <img src="https://aaruush.org/static/media/aaruush-header.40cb53b22d0ec21e6baa.png" alt="" />
          <div>
            <p style={{width:"200px"}}>Social links here</p>
          </div>
          <img src="https://aaruush.org/static/media/envision.0a5eb77fc899493341abbfeccf65b633.svg" alt="" />
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>csiorg@aaruush.net</p>
          <p>Pranav Khandelwal: +91 93995 83599</p>
          <p>Ritika Agarwal: +91 92057 34127</p>
          <p>Siddhant Priyadarshi +91 62328 83113</p>
        </div>
        <div>
          <h2>Join Us</h2>
          <p>Be a Campus Ambassador</p>
          <p>Sponsor us</p>
          <p>Partner for an Initiative</p>
          <p>Partner for a Workshop</p>
        </div>
        <div>
          <h2>Get Quickest Updates on latest events</h2>
          <div className={styles["contact-newsletter-container"]}>
            <input type="email" placeholder="Email"/>
            <button>submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
