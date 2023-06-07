import React from 'react'
import { AudioBig, AudioSmall } from "./index"
import audio1 from "../../assets/images/audio_1.png"
import audio2 from "../../assets/images/audio_2.png"
import audio3 from "../../assets/images/audio_3.png"
import audio4 from "../../assets/images/audio_4.png"
import styles from "./AudioLive.module.css"

const AudioLive = () => {
    return (
        <div className={styles.audio_live_container}>
            <h1 className={styles.audio_live_title}>Listen NFTs audio live.</h1>
            <p className={styles.audio_live_description}>Click on music icon and enjoy NTF music or audio</p>
            <div className={styles.audio_container}>
                <div className={styles.audio_live_container_left}>
                    <AudioBig image={audio1} number={1132} price={"1.324"} stock={100} id={1} />
                    <AudioBig image={audio2} number={1133} price={"1.113"} stock={72} id={2} />
                </div>
                <div className={styles.audio_live_container_right}>
                    <AudioSmall image={audio3} number={112} price={"0.983"} stock={1017} id={1} />
                    <AudioSmall image={audio4} number={113} price={"0.576"} stock={1138} id={2} />
                </div>
            </div>
        </div >
    )
}

export default AudioLive