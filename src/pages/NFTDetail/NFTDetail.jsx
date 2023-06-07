import React, { useState } from 'react'
import Chart from "react-apexcharts";
import hero from "../../assets/images/audio_2.png"
import creator from "../../assets/images/creator_1.svg"
import owner from "../../assets/images/creator_2.svg"
import { attributes } from '../../assets/data/attributes'
import { EarnCrypto } from "../../components/indexComponents"
import styles from "./NFTDetail.module.css"

const NFTDetail = () => {
    const [volumeAndPrice, setVolumeAndPrice] = useState({
        options: {
            chart: {
                id: "basic-bar-1"
            },
            xaxis: {
                categories: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
            },
            colors: ["#212121"]
        },
        series: [
            {
                name: "# of Votes",
                data: [0, 10000, 13000, 8000, 25000, 20000, 30000, 35000, 23000, 16000, 20000, 21000]
            }
        ],
    })

    return (
        <>
            <div className={styles.nft_detail_container}>
                <div className={styles.nft_detail_container_left}>
                    <img src={hero} alt="nft" />
                    <div className={styles.nft_detail_infos}>
                        <h2>Details</h2>
                        <div className={styles.nft_detail_info}>
                            <small>Contract Address</small>
                            <small>0x34d8...e258</small>
                        </div>
                        <div className={styles.nft_detail_info}>
                            <small>Token ID</small>
                            <small>56653</small>
                        </div>
                        <div className={styles.nft_detail_info}>
                            <small>Token Standard</small>
                            <small>ERC-721</small>
                        </div>
                        <div className={styles.nft_detail_info}>
                            <small>Chain</small>
                            <small>Ethereum</small>
                        </div>
                        <div className={styles.nft_detail_info}>
                            <small>Creator</small>
                            <small>Medica Deo</small>
                        </div>
                        <div className={styles.nft_detail_info}>
                            <small>Info</small>
                            <small>5%</small>
                        </div>
                    </div>
                    <div className={styles.nft_details_attributes}>
                        <h2>Attributes</h2>
                        <div className={styles.nft_details_attributes_container}>
                            {
                                attributes.map(attribute => (
                                    <div className={styles.nft_details_attribute} key={attribute.id}>
                                        <small className={styles.attribute_name}>{attribute.name}</small>
                                        <p>{attribute.attribute}</p>
                                        <small>{attribute.description}</small>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.nft_detail_container_right}>
                    <small className={styles.eth}>Etherium</small>
                    <h1>Human #3698</h1>
                    <div className={styles.nft_detail_creator_details}>
                        <div className={styles.nft_detail_creator_detail}>
                            <img src={creator} alt="creator" />
                            <div>
                                <small>Creator</small>
                                <p>Steven S. Cook</p>
                            </div>
                        </div>
                        <div className={styles.nft_detail_creator_detail}>
                            <img src={owner} alt="owner" />
                            <div>
                                <small>Creator</small>
                                <p>Nancy Riddell</p>
                            </div>
                        </div>
                    </div>
                    <h3 className={styles.description_title}>Description</h3>
                    <p>Child of #48 Bat Veil & #42 Screw Nose. This mushroom is the result of the cross-breeding of two original one of a kind generative mushrooms donated back to the Fisherian Runaways project their generous owner.</p>
                    <p className={styles.date}>18d : 22h : 13m : 45s</p>
                    <h3 className={styles.description_title}>Current Price</h3>
                    <h1>1.8799 ETH</h1>
                    <div className={styles.actions}>
                        <button>Palce a Bid</button>
                        <button>Make Offer</button>
                    </div>
                    <div className={styles.big_chart_container}>
                        <h3>Volume and Price</h3>
                        <div className={styles.chart_container}>
                            <div className={styles.chart_container}>
                                <Chart
                                    options={volumeAndPrice.options}
                                    series={volumeAndPrice.series}
                                    type="line"
                                    width="90%"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EarnCrypto />
        </>
    )
}

export default NFTDetail