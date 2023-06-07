import React, { useState } from 'react'
import { AiFillHeart } from "react-icons/ai"
import { FaPlay } from "react-icons/fa"
import { BsPauseFill } from "react-icons/bs"
import { videos } from "../../assets/data/videos"
import styles from "./Video.module.css"

const Video = () => {
    const [videoPlay, setVideoPlay] = useState(0);

    return (
        <div className={styles.video_container}>
            <h1 className={styles.video_title}>Explore NFTs Video.</h1>
            <p className={styles.video_description}>Click on play icon and enjoy NTFs video</p>
            <div className={styles.video_items}>
                {
                    videos.map(video => (
                        <div className={styles.video_item} key={video.id}>
                            <div className={styles.video_item_inner}>
                                <AiFillHeart className={styles.video_heart} />
                                <img src={video.image} alt="video" />
                                {
                                    videoPlay !== video.id ? <FaPlay className={styles.video_play} onClick={() => setVideoPlay(video.id)} />
                                        : <BsPauseFill className={styles.video_play} onClick={() => setVideoPlay(prev => !prev)} />
                                }

                            </div>
                            <div className={styles.video_item_info_container}>
                                <div className={styles.video_item_info}>
                                    <h3>NFT Video #{video.number}</h3>
                                    <div className={styles.creators_container}>
                                        <img src={video.creators.creator1} alt="creator" />
                                        <img src={video.creators.creator2} alt="creator" />
                                        <img src={video.creators.creator3} alt="creator" />
                                        <img src={video.creators.creator4} alt="creator" />
                                        <p>1 of {video.stock}</p>
                                    </div>
                                </div>
                                <div className={styles.video_item_info}>
                                    <div className={styles.video_price}>
                                        <small>Current Bid</small>
                                        <p>{video.price} ETH</p>
                                    </div>
                                    <div className={styles.remaining_time}>
                                        <small>Remaining Time</small>
                                        <p>12h:42m:19s</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Video