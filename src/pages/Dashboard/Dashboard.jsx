import React, { useState } from 'react'
import { BsArrowDown, BsArrowUp } from "react-icons/bs"
import Chart from "react-apexcharts";
import { currencies } from '../../assets/data/currencies'
import { currencyTable } from '../../assets/data/currencyTable';
import creator from "../../assets/images/creator_1.svg"
import styles from "./Dashboard.module.css"

const Dashboard = () => {
    const [liquidity, setLiquidity] = useState({
        options: {
            chart: {
                id: "basic-area-chart"
            },
            xaxis: {
                categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
            },
            colors: ["#212121"]
        },
        series: [
            {
                name: "# of Votes",
                data: [333, 321, 492, 588, 702, 530, 762, 888, 949, 721, 621, 596, 522, 598, 558, 589, 548, 547, 410, 479]
            }
        ],
    })

    const [volume, setVolume] = useState({
        options: {
            chart: {
                id: "basic-bar-chart"
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
            },
            colors: ["#212121"]
        },
        series: [
            {
                name: "# of Votes",
                data: [333, 411, 582, 678, 702, 530, 762, 888, 949, 721, 621, 696, 722, 698, 558, 589, 548, 547, 510, 679]
            }
        ],
    })

    return (
        <div className={styles.dashboard_container}>
            <div className={styles.dashboard_header}>
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
                        </div>
                    ))
                }
                <div className={styles.currency_item_creator}>
                    <img src={creator} alt="user" />
                    <h4>My Balance</h4>
                    <h2>$ 10,86,000</h2>
                    <div className={styles.top_balance_container}>
                        <small>+</small>
                        <p>Top Up Balance</p>
                    </div>
                </div>
            </div>
            <div className={styles.charts_container}>
                <div className={styles.chart_container}>
                    <h1>Liquidity</h1>
                    <Chart
                        options={liquidity.options}
                        series={liquidity.series}
                        type="area"
                        width="100%"
                    />
                </div>
                <div className={styles.chart_container}>
                    <h1>Volume</h1>
                    <Chart
                        options={volume.options}
                        series={volume.series}
                        type="bar"
                        width="100%"
                    />
                </div>
            </div>
            <h1 className={styles.top_cryptocurrency_title}>Top Cryptocurrency</h1>
            <div className={styles.table_container}>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>24H Change</th>
                            <th>24H Volume</th>
                            <th>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currencyTable.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td className={styles.coin_name}>{item.svg}{item.name} <b>({item.shortName})</b></td>
                                    <td>{item.price}</td>
                                    <td className={item.increase ? styles.increase : styles.decrease}>{item.change}%</td>
                                    <td>{item.volume}</td>
                                    <td>{item.marketCap}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard