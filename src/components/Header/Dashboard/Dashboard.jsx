import React from 'react'
import { Link } from 'react-router-dom'
import { dashboardMenu } from "../../../assets/data/dashboardMenu"
import styles from "./Dashboard.module.css"

const Dashboard = ({
    dashboard,
    setDashboard
}) => {
    return (
        <div>{
            dashboard ? (
                <div className={styles.dashboard_container}>
                    <ul>
                        {
                            dashboardMenu.map(item => (
                                <li key={item.id}>
                                    <Link to={item.path} onClick={() => setDashboard(false)}>{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            ) : null
        }
        </div>
    )
}

export default Dashboard