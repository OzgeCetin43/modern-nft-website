import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import styles from "./AuthorAbout.module.css"

const AuthorAbout = () => {
    return (
        <div className={styles.author_about_container}>
            <div className={styles.author_info_items}>
                <div className={styles.author_info_item}>
                    <h1>5,001ETH+</h1>
                    <small>Volumn</small>
                </div>
                <div className={styles.author_info_item}>
                    <h1>10.879ETH+</h1>
                    <small>Best offer</small>
                </div>
                <div className={styles.author_info_item}>
                    <h1>10%</h1>
                    <small>Listed</small>
                </div>
                <div className={styles.author_info_item}>
                    <h1>1.76 ETH</h1>
                    <small>Floor Price</small>
                </div>
                <div className={styles.author_info_item}>
                    <h1>42</h1>
                    <small>Owners</small>
                </div>
                <div className={styles.author_info_item}>
                    <h1>42%</h1>
                    <small>Unique Owners</small>
                </div>
            </div>
            <p className={styles.author_about_desription}>A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury experiences and activations paid for by the Doodles Community Treasury.</p>
            <p className={styles.author_about_desription}>A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury experiences and activations paid for by the Doodles Community Treasury.</p>
            <div className={styles.social_media_icons}>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
            </div>
        </div>
    )
}

export default AuthorAbout