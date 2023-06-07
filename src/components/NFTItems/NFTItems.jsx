import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { RiDashboardFill } from "react-icons/ri"
import { NFTItemSidebar } from '../indexComponents'
import { nftItems } from '../../assets/data/nftItems'
import creator from "../../assets/images/creator_1.svg"
import owner from "../../assets/images/creator_2.svg"
import styles from "./NFTItems.module.css"

const NFTItems = () => {
    const [days, setDays] = useState("00")
    const [hours, setHours] = useState("00")
    const [minutes, setMinutes] = useState("00")
    const [seconds, setSeconds] = useState("00")

    let interval = useRef()

    useEffect(() => {
        startTimer()

        return () => {
            clearInterval(interval.current)
        }
    }, [])

    const startTimer = () => {
        const date = new Date("May 30, 2025 00:00:00").getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const difference = date - now

            const d = Math.floor(difference / (1000 * 60 * 60 * 24))
            const h = Math.floor((difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            const s = Math.floor((difference % (1000 * 60)) / 1000)

            if (difference < 0)
                clearInterval(interval.current)
            else {
                setDays(d)
                setHours(h)
                setMinutes(m)
                setSeconds(s)
            }
        }, 1000)
    }

    return (
        <>
            <div className={styles.nft_items_header}>
                <h1>2,335 NFT's shown</h1>
                <Link to="/dashboard">
                    <RiDashboardFill />
                </Link>
            </div>
            <hr />
            <div className={styles.nft_items_container}>
                <div className={styles.nft_items_container_left}>
                    <NFTItemSidebar />
                </div>
                <div className={styles.nft_items_container_right}>
                    {
                        nftItems.map(item => (
                            <div className={styles.nft_item} key={item.id}>
                                <div className={styles.creator_info}>
                                    <div className={styles.creator}>
                                        <img src={creator} alt="creator" />
                                        <div>
                                            <small>Created</small>
                                            <p>@moonbird</p>
                                        </div>
                                    </div>
                                    <div className={styles.creator}>
                                        <img src={owner} alt="creator" />
                                        <div>
                                            <small>Owner</small>
                                            <p>@panditcas</p>
                                        </div>
                                    </div>
                                </div>
                                <img src={item.image} alt="nft" className={styles.nft_image} />
                                <h2>{item.name}</h2>
                                <div className={styles.price_container}>
                                    <div className={styles.price_item}>
                                        <small>Current Price</small>
                                        <p>0.987ETH</p>
                                    </div>
                                    <div className={styles.price_item}>
                                        <small>Floor price</small>
                                        <p>2.27ETH</p>
                                    </div>
                                    <div className={styles.price_item}>
                                        <small>Current Bid</small>
                                        <p>1.73ETH</p>
                                    </div>
                                </div>
                                <button>Place a bid</button>
                                <div>
                                    <small>Remaining Time</small>
                                    <p><b>{days}d : {hours}h : {minutes}m : {seconds}s</b></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default NFTItems