import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts"
import { Link } from 'react-router-dom'
import { RiDashboardFill } from "react-icons/ri"
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs"
import { activity } from "../../assets/data/activity"
import styles from "./Activity.module.css"

const Activity = () => {
    const [priceDistrubition, setPriceDistrubition] = useState({
        series: [{
            name: 'Website Blog',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
            name: 'Social Media',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
        options: {
            colors: ["#10d876", "#e4405f"],
            chart: {
                height: 350,
                type: 'line',
            },
            stroke: {
                width: [0, 4]
            },
            title: {
                text: 'Traffic Sources'
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
            },
            labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
            xaxis: {
                type: 'datetime'
            },
            yaxis: [{
                title: {
                    text: 'Website Blog',
                },

            }, {
                opposite: true,
                title: {
                    text: 'Social Media'
                }
            }]
        },
    })

    return (
        <div className={styles.activity_container}>
            <ReactApexChart
                options={priceDistrubition.options}
                series={priceDistrubition.series}
                type="bar"
                width="100%"
            />
            <div className={styles.activity_header}>
                <h1>Activity data</h1>
                <Link to="/dashboard">
                    <RiDashboardFill />
                </Link>
            </div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        activity.map(a => (
                            <tr key={a.id}>
                                <td className={styles.item_container}>
                                    <img src={a.image} alt="activity" />
                                    <div className={styles.item_container_info}>
                                        <h4>{a.name}</h4>
                                        <small>#{a.number}</small>
                                    </div>
                                </td>
                                <td className={styles.price}>
                                    <h2>{a.price} ETH</h2>
                                    {
                                        a.increase ? <small className={styles.increase}> <BsArrowUpRight /> {a.increase}</small>
                                            : a.decrease ? <small className={styles.decrease}><BsArrowDownRight /> {a.decrease}</small>
                                                : null
                                    }
                                </td>
                                <td>{a.quantity}</td>
                                <td>{a.from}</td>
                                <td>{a.to}</td>
                                <td>{a.time} ago</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Activity