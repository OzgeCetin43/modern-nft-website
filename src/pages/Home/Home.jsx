import React from 'react'
import hero from "../../assets/images/audio_2.png"
import circleHero from "../../assets/images/circle_hero.png"
import { Button, Steps, Slider, AudioLive, Creators, Video, TopCollections, Newsletter, Categories } from "../../components/indexComponents"
import styles from "./Home.module.css"

const Home = () => {
    return (
        <>
            <div className={styles.home_container}>
                <div className={styles.home_container_left}>
                    <small className={styles.home_container_subtitle}>Create, Explore, & Collect Digital Art NFTs.</small>
                    <h1 className={styles.home_container_title}>Buy, sell, and showcase NFTs</h1>
                    <p className={styles.home_container_description}>Discover the most outstanding NTFs in all topics of life. Creative your NTFs and sell them.</p>
                    <div className={styles.search_button_container}>
                        <Button path="/search" name="Start your search" />
                        <img src={circleHero} alt="circle hero" className={styles.circle} />
                    </div>
                    <div className={styles.line_1} />
                    <div className={styles.line_2} />
                </div>
                <div className={styles.home_container_right}>
                    <img src={hero} alt="hero" />
                </div>
            </div>
            <Steps />
            <Slider />
            <AudioLive />
            <Creators />
            <Video />
            <TopCollections />
            <Newsletter />
            <Categories />
        </>
    )
}

export default Home