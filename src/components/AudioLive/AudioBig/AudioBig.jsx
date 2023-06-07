import React, { useState } from 'react'
import { AiFillHeart } from "react-icons/ai"
import { FaPlay } from "react-icons/fa"
import { BsPauseFill } from "react-icons/bs"
import audio from "../../../assets/images/audio_icon.webp"
import styles from "./AudioBig.module.css"

const AudioBig = ({
    image,
    number,
    price,
    stock,
    id
}) => {
    const [audioPlay, setAudioPlay] = useState(0);
    return (
        <div className={styles.audio_big_main_container}>
            <div className={styles.audio_big_container}>
                <div className={styles.audio_big_header}>
                    <AiFillHeart />
                    <div className={styles.remaining_time_container}>
                        <p>Remaining time</p>
                        <h3>3h : 17m : 20s</h3>
                    </div>
                </div>
                <img src={image} alt="audio" />
                <div className={styles.audio_play_container}>
                    <img src={audio} alt="audio" className={styles.audio_icon} />
                    {
                        audioPlay !== id ? <FaPlay onClick={() => setAudioPlay(id)} />
                            : <BsPauseFill onClick={() => setAudioPlay(prev => !prev)} />
                    }
                </div>
            </div>
            <div div className={styles.audio_big_footer} >
                <p>NFT music #{number}</p>
                <div className={styles.audio_price_container}>
                    <div className={styles.audio_price}>
                        <small>Price</small>
                        <p>{price} ETH</p>
                    </div>
                    <p className={styles.stock}>{stock} in stock</p>
                </div>
            </div>
        </div>
    )
}

export default AudioBig