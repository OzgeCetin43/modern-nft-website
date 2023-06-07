import React from 'react'
import hero1 from "../../assets/images/about_us_1.png"
import hero2 from "../../assets/images/about_us_2.png"
import { Creators, EarnCrypto } from "../../components/indexComponents"
import styles from "./About.module.css"

const About = () => {
    return (
        <div className={styles.about_container}>
            <h1 className={styles.about_title}>About the Platform</h1>
            <div className={styles.create_and_invest_container}>
                <div className={styles.create_and_invest_container_left}>
                    <img src={hero1} alt="hero" />
                </div>
                <div className={styles.create_and_invest_container_right}>
                    <small>Create and Invest</small>
                    <h3>Create your own NFT</h3>
                    <p>Multiple Chains, One Home. Stack up all your NFTs from across blockchains.</p>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <h2>4,500+</h2>
                            <p>Collections Indexed every 5 mins.</p>
                        </div>
                        <div className={styles.item}>
                            <h2>2.5x</h2>
                            <p>Difference in Floor & Estimated NFT Value.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sync_and_track_container}>
                <div className={styles.sync_and_track_container_left}>
                    <small>Sync and Track</small>
                    <h3>Multiple Chains, One Home</h3>
                    <p>We make it easy to Discover, Invest and manage all your NFTs at one place, looked up one of the more obscure.Find the right NFT collections to buy within the platform.</p>
                </div>
                <div className={styles.sync_and_track_container_right}>
                    <img src={hero2} alt="hero" />
                </div>
            </div>
            <h1 className={styles.about_title}>About Us</h1>
            <Creators />
            <EarnCrypto />
        </div>
    )
}

export default About