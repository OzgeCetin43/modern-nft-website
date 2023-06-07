import React from 'react'
import { FiArrowRight } from "react-icons/fi"
import hero from "../../assets/images/news_letter.png"
import styles from "./Newsletter.module.css"

const Newsletter = () => {
    return (
        <div className={styles.newsletter_container}>
            <div className={styles.newsletter_container_left}>
                <h1>Never miss a drop!</h1>
                <p>Subcribe to our super-exclusive drop list and be the first to know abour upcoming drops</p>
                <div className={styles.steps_container}>
                    <div className={styles.step}>
                        <small>01.</small>
                        <p>Get more discount</p>
                    </div>
                    <div className={styles.step}>
                        <small>02.</small>
                        <p>Get premium magazines</p>
                    </div>
                </div>
                <div className={styles.header_email_box_container}>
                    <input type='text' placeholder='Enter your email' />
                    <FiArrowRight />
                </div>
            </div>
            <div className={styles.newsletter_container_right}>
                <img src={hero} alt="newsletter" />
            </div>
        </div>
    )
}

export default Newsletter