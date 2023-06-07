import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiDashboardFill } from "react-icons/ri"
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs"
import Chart from "react-apexcharts";
import { NFTItemSidebar } from '../indexComponents'
import styles from "./Analytics.module.css"

const Analytics = () => {
    const [sales, setSales] = useState({
        options: {
            chart: {
                id: "basic-bar-1"
            },
            xaxis: {
                categories: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"]
            },
            colors: ["#212121"]
        },
        series: [
            {
                name: "# of Votes",
                data: [13, 8, 25, 20, 10, 15]
            }
        ],
    })

    const [volumn, setVolumn] = useState({
        options: {
            chart: {
                id: "basic-bar-2"
            },
            xaxis: {
                categories: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"]
            },
            colors: ["#212121"]
        },
        series: [
            {
                name: "# of Votes",
                data: [8, 12, 23, 12, 25, 20]
            }
        ],
    })

    const [volumeAndPrice, setVolumeAndPrice] = useState({
        options: {
            chart: {
                id: "basic-bar-3"
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
            <div className={styles.analytics_header}>
                <h1>2,335 NFT's shown</h1>
                <Link to="/dashboard">
                    <RiDashboardFill />
                </Link>
            </div>
            <hr />
            <div className={styles.analytics_container}>
                <div className={styles.analytics_container_left}>
                    <NFTItemSidebar />
                </div>
                <div className={styles.analytics_container_right}>
                    <div className={styles.analytics_small_charts_container}>
                        <div className={styles.small_charts}>
                            <div className={styles.small_chart_info_container}>
                                <h3>Sales</h3>
                                <h1>8,673 ETH</h1>
                                <BsArrowUpRight />
                                <small>50%</small>
                            </div>
                            <div className={styles.chart_container}>
                                <Chart
                                    options={sales.options}
                                    series={sales.series}
                                    type="bar"
                                    width="90%"
                                />
                            </div>
                        </div>
                        <div className={styles.small_charts}>
                            <div className={styles.small_chart_info_container}>
                                <h3>Volumn</h3>
                                <h1>2.3B ETH</h1>
                                <BsArrowDownRight />
                                <small>23%</small>
                            </div>
                            <div className={styles.chart_container}>
                                <Chart
                                    options={volumn.options}
                                    series={volumn.series}
                                    type="bar"
                                    width="90%"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.big_chart_container}>
                        <div className={styles.small_chart_info_container}>
                            <h3>Volume and Price</h3>
                        </div>
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
        </>
    )
}

export default Analytics