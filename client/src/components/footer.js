import React from 'react'
import styles from "../css/footer.module.css"
export const Footer = () => {
  return (
    <div className={styles.footer}>
        <footer>
        <div className={styles.footer0}>
          <h1>Vasavi Mahal</h1>
        </div>
        <div className={styles.footer2}>
          <div className={styles.product}>
            <div className={styles.heading}>Home</div>
            <div className={styles.div}>About Vasavi Mahal</div>
            <div className={styles.div}>Contact Us</div>
            <div className={styles.div}>Terms & Conditions</div>
            <div className={styles.div}>Site Map</div>
          </div>
          <div className={styles.services}>
            <div className={styles.heading}>Services</div>
            <div className={styles.div}>Booking</div>
            <div className={styles.div}>Cash Back</div>
            <div className={styles.div}>Checking Availability</div>
            <div className={styles.div}>Others</div>
          </div>
          <div className={styles.Company}>
            <div className={styles.heading}>Company</div>
            <div className={styles.div}>Complaint</div>
            <div className={styles.div}>Careers</div>
            <div className={styles.div}>Support</div>
          </div>
          <div className={styles.GetHelp}>
            <div className={styles.heading}>Get Help</div>
            <div className={styles.div}>Help Center</div>
            <div className={styles.div}>Privacy Policy</div>
            <div classNAme={styles.div}>Terms</div>
            <div className={styles.div}>Login</div>
          </div>
        </div>
        <div className={styles.footer3}>Copyright © <h4>Vasavi Mahal</h4> 2021-2028</div>
      </footer>
    </div>
  )
}
