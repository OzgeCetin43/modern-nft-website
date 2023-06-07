import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa"
import { BsPauseFill } from "react-icons/bs"
import styles from "./AudioSmall.module.css"

const AudioSmall = ({
    image,
    number,
    price,
    stock,
    id
}) => {
    const [audioPlay, setAudioPlay] = useState(0);

    return (
        <div className={styles.audio_small_container}>
            <img src={image} alt="audio" />
            <div className={styles.audio_info_container}>
                <p className={styles.audio_number}>NFT music #{number}</p>
                <div className={styles.audio_price_container}>
                    <div className={styles.audio_price}>
                        <small>Price</small>
                        <p>{price} ETH</p>
                    </div>
                    <small className={styles.stock}>1 of {stock}</small>
                </div>
                {
                    audioPlay !== id ? <FaPlay onClick={() => setAudioPlay(id)} />
                        : <BsPauseFill onClick={() => setAudioPlay(prev => !prev)} />
                }
            </div>
        </div>
    )
}

export default AudioSmall