import React from 'react'
import { Link } from 'react-router-dom'
import { RiDashboardFill } from "react-icons/ri"
import { FollowerSidebar } from '../indexComponents'
import { followers } from "../../assets/data/followers"
import styles from "./Followers.module.css"

const Followers = () => {
    return (
        <>
            <div className={styles.followers_header}>
                <h1>35 Profile's shown</h1>
                <Link to="/dashboard">
                    <RiDashboardFill />
                </Link>
            </div>
            <div className={styles.followers_container}>
                <div className={styles.followers_container_left}>
                    <FollowerSidebar />
                </div>
                <div className={styles.followers_container_right}>
                    {
                        followers.map(follower => (
                            <div className={styles.follower_item} key={follower.id}>
                                <div className={styles.follower_item_info}>
                                    <img src={follower.image} alt="follower" />
                                    <div className={styles.follower_name_container}>
                                        <h2>{follower.name}</h2>
                                        <small>{follower.about}</small>
                                    </div>
                                    <div className={styles.follower_info_inner}>
                                        <div>
                                            <h2>500+</h2>
                                            <small>Floor Price</small>
                                        </div>
                                        <div>
                                            <h2>88.7K</h2>
                                            <small>Volumn</small>
                                        </div>
                                        <div>
                                            <h2>1,334</h2>
                                            <small>Created</small>
                                        </div>
                                    </div>
                                </div>
                                <button className={styles.follow_button}>Follow</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Followers