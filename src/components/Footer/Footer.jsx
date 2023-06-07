import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>&copy; Created by Özge Çetin - 2023</p>
            <div className={styles.social_media_icons}>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
            </div>
        </div>
    )
}

export default Footer