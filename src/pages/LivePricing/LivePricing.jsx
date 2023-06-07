import React, { useState } from 'react'
import { BsArrowDown, BsArrowUp } from "react-icons/bs"
import { GrClose } from "react-icons/gr"
import Chart from "react-apexcharts";
import { currencies } from '../../assets/data/currencies'
import { prices } from '../../assets/data/prices';
import styles from "./LivePricing.module.css"

const LivePricing = () => {
    const [volume, setVolume] = useState({
        options: {
            chart: {
                id: "basic-bar-chart"
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            },
            colors: ["#212121"]
        },
        series: [
            {
                name: "# of Votes",
                data: [333, 411, 582, 678, 702, 530, 762, 888, 949, 721]
            }
        ],
    })

    const [week, setWeek] = useState({
        options: {
            chart: {
                id: "basic-bar-chart"
            },
            xaxis: {
                categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]
            },
            colors: ["#212121", "#cdd9ed"]
        },
        series: [
            {
                name: "# of Votes",
                data: [42, 67, 124, 128, 96, 112, 198]
            },
            {
                name: "# of Votes 2",
                data: [44, 38, 127, 145, 132, 89, 196]
            }
        ],
    })

    const [month, setMonth] = useState({
        options: {
            chart: {
                id: "basic-bar-chart"
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            colors: ["#212121", "#cdd9ed"]
        },
        series: [
            {
                name: "# of Votes",
                data: [42, 67, 124, 128, 96, 112, 198, 243, 125, 136, 129, 87]
            },
            {
                name: "# of Votes 2",
                data: [44, 38, 127, 145, 132, 89, 196, 256, 250, 182, 199, 45]
            }
        ],
    })

    const [year, setYear] = useState({
        options: {
            chart: {
                id: "basic-bar-chart"
            },
            xaxis: {
                categories: [2020, 2021, 2022, 2023]
            },
            colors: ["#212121", "#cdd9ed"]
        },
        series: [
            {
                name: "# of Votes",
                data: [42, 67, 124, 128]
            },
            {
                name: "# of Votes 2",
                data: [44, 38, 127, 145]
            }
        ],
    })

    const [currentCoin, setCurrentCoin] = useState(0);
    const [activeFilter, setActiveFilter] = useState("week");

    const findCurrentCoin = () => {
        return prices.filter(x => x.id === currentCoin)[0];
    }

    return (
        <div className={styles.live_pricing_container}>
            <div className={styles.live_pricing_header}>
                {
                    currencies.map(currency => (
                        <div className={styles.currency_item} key={currency.id}>
                            <h3>{currency.name}</h3>
                            <img src={currency.image} alt="currency" />
                            <h2>{currency.total}</h2>
                            <div className={styles.currency_info_container}>
                                <p>{currency.usd} USD</p>
                                {
                                    currency.increase ? <small className={styles.increase}><BsArrowUp /> {currency.increase}%</small>
                                        : <small className={styles.decrease}><BsArrowDown /> {currency.decrease}%</small>
                                }
                            </div>
                            <div className={styles.chart_container}>
                                <h3>Volume</h3>
                                <Chart
                                    options={volume.options}
                                    series={volume.series}
                                    type="bar"
                                    width="100%"
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
            <h1 className={styles.cryptocurrency_title}>Cryptocurrency Prices</h1>
            <div className={styles.table_container}>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Coin Name</th>
                            <th>Price</th>
                            <th>Circulating Supply</th>
                            <th>Volume (24h)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            prices.map(item => (
                                <tr key={item.id} onClick={() => setCurrentCoin(item.id)}>
                                    <td>{item.id}</td>
                                    <td className={styles.coin_name}>{item.svg}{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>$19330475</td>
                                    <td>$21000000</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <div className={styles.coin_sidebar}>
                        {
                            currentCoin !== 0 ? (
                                <div className={styles.coin_sidebar_inner}>
                                    <GrClose className={styles.close_icon} onClick={() => setCurrentCoin(0)} />
                                    <div className={styles.coin_sidebar_header}>
                                        {findCurrentCoin().svg}
                                        <span>RANK #{currentCoin}</span>
                                    </div>
                                    <p>May 31, 2023 15:28PM</p>
                                    <div className={styles.filters}>
                                        <button onClick={() => setActiveFilter("week")}>Week</button>
                                        <button onClick={() => setActiveFilter("month")}>Month</button>
                                        <button onClick={() => setActiveFilter("year")}>Year</button>
                                    </div>
                                    <div className={styles.chart_container}>
                                        <h4>{activeFilter}</h4>
                                        {
                                            activeFilter === "week" ? (
                                                <Chart
                                                    options={week.options}
                                                    series={week.series}
                                                    type="bar"
                                                    width="100%"
                                                />
                                            ) : activeFilter === "month" ? (
                                                <Chart
                                                    options={month.options}
                                                    series={month.series}
                                                    type="bar"
                                                    width="100%"
                                                />
                                            ) : (
                                                <Chart
                                                    options={year.options}
                                                    series={year.series}
                                                    type="bar"
                                                    width="100%"
                                                />
                                            )
                                        }
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                </table>
            </div >
        </div >
    )
}

export default LivePricing