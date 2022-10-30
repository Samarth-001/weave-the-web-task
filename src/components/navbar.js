import React from 'react';
import styles from '../styles/navbar.module.scss'

function navbar() {
  return (
    <>
    <div className={styles['navbar-section']}>
        <div className={styles['navbar-logo']}>
            <img src="https://aaruush.org/static/media/aaruush-header.40cb53b22d0ec21e6baa.png" alt="aarush-image" />
        </div>
        <div className={styles['navbar-links-container']}>
            <ul className={styles['navbar-links']}>
                <li>About</li>
                <li>Gallery</li>
                <li>Events</li>
                <li>Timeline</li>
                <li>Sponsors</li>
                <li>ContactUs</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default navbar