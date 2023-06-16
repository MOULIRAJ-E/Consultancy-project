import React from 'react'
import styles from "../css/locate.module.css"
export const Locate = () => {
  return (
    <div>
       <h2 className={styles.location_header}> Location of Vasavi Mahal </h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.588350678014!2d77.507092!3d10.4542035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9de84fa223e3f%3A0x577e6204c0f5b84e!2sVasavi%20Mahal!5e0!3m2!1sen!2sin!4v1679755398402!5m2!1sen!2sin"
             width="600" 
             height="450" 
             style={{ border: "0" }}
             allowfullscreen=""
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
              </iframe>
    </div>
  )
}
