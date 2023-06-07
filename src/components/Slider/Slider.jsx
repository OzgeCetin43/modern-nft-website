import React, { useEffect, useRef, useState } from 'react'
import { BsClockHistory } from "react-icons/bs"
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiFillHeart } from "react-icons/ai"
import { slider } from '../../assets/data/slider'
import collection from "../../assets/images/collection.webp"
import { Button } from "../indexComponents"
import styles from "./Slider.module.css"

const Slider = () => {
    const [currentSlider, setCurrentSlider] = useState(0)
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

    const goToPrev = () => {
        if (currentSlider === 0)
            setCurrentSlider(slider.length - 1)
        else
            setCurrentSlider(prev => prev - 1)
    }

    const goToNext = () => {
        if (currentSlider === slider.length - 1)
            setCurrentSlider(0)
        else
            setCurrentSlider(prev => prev + 1)
    }

    return (
        <div className={styles.slider_container}>
            <div className={styles.slider_container_left}>
                <h1 className={styles.slider_title}>{slider[currentSlider].name}</h1>
                <div className={styles.creator_container}>
                    <div className={styles.creator_container_left}>
                        <div className={styles.cretor_info_container}>
                            <img src={slider[currentSlider].cretaor} alt="creator" />
                            <div className={styles.creator_info}>
                                <small>Creator</small>
                                <p>{slider[currentSlider].creatorName}</p>
                            </div>
                        </div>
                        <div className={styles.cretor_colletcion_container}>
                            <img src={collection} alt="collection" />
                            <div className={styles.collection_info}>
                                <small>Collection</small>
                                <p>Human</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.current_bid_container}>
                    <small>Current Bid</small>
                    <h2>{slider[currentSlider].currentBid} ETH</h2>
                </div>
                <div className={styles.auction_container}>
                    <div className={styles.auction_title_container}>
                        <BsClockHistory />
                        <small>Auction ending in:</small>
                    </div>
                    <div className={styles.auction_time_container}>
                        <div className={styles.auction_time}>
                            <p>{days}</p>
                            <small>Days</small>
                        </div>
                        <small>:</small>
                        <div className={styles.auction_time}>
                            <p>{hours}</p>
                            <small>Hours</small>
                        </div>
                        <small>:</small>
                        <div className={styles.auction_time}>
                            <p>{minutes}</p>
                            <small>Minutes</small>
                        </div>
                        <small>:</small>
                        <div className={styles.auction_time}>
                            <p>{seconds}</p>
                            <small>Seconds</small>
                        </div>
                    </div>
                    <div className={styles.buttons_container}>
                        <Button path="/nft-detail" name="Place a bid" />
                        <Button path="/nft-detail" name="View Item" />
                    </div>
                    <div className={styles.navigation_buttons_container}>
                        <AiOutlineArrowLeft onClick={() => goToPrev()} />
                        <AiOutlineArrowRight onClick={() => goToNext()} />
                    </div>
                </div>
            </div>
            <div className={styles.slider_container_right}>
                <img src={slider[currentSlider].image} alt="" />
                <AiFillHeart />
            </div>
        </div >
    )
}

export default Slider