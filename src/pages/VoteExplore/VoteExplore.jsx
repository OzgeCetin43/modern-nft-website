import React from 'react'
import { Link } from 'react-router-dom'
import { FaDiscord } from "react-icons/fa"
import { MdForum } from "react-icons/md"
import { BsBank2 } from "react-icons/bs"
import { GiMirrorMirror } from "react-icons/gi"
import vote from "../../assets/images/vote.svg"
import styles from "./VoteExplore.module.css"

const VoteExplore = () => {
    return (
        <div className={styles.vote_explore_container}>
            <div className={styles.vote_explore_left}>
                <img src={vote} alt="vote" />
                <h2>Vote With Pool</h2>
                <Link to="/">Vote with POOL tokens held in your wallet or delegated to you.</Link>
            </div>
            <div className={styles.vote_explore_right}>
                <div className={styles.vote_explore_item}>
                    <FaDiscord />
                    <h1>Chat on Discord</h1>
                </div>
                <div className={styles.vote_explore_item}>
                    <MdForum />
                    <h1>Join the Forum</h1>
                </div>
                <div className={styles.vote_explore_item}>
                    <BsBank2 />
                    <h1>View Documentation</h1>
                </div>
                <div className={styles.vote_explore_item}>
                    <GiMirrorMirror />
                    <h1>Read on Mirror</h1>
                </div>
            </div>
        </div>
    )
}

export default VoteExplore