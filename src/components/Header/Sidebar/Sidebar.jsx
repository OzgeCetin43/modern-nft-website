import React, { useState } from 'react'
import { GrClose } from "react-icons/gr"
import { Link } from 'react-router-dom'
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"
import { BsSearch } from "react-icons/bs"
import { discover as d } from '../../../assets/data/discover'
import { dashboardMenu } from '../../../assets/data/dashboardMenu'
import { Button } from "../../indexComponents"
import styles from "./Sidebar.module.css"

const Sidebar = ({
    sidebarOpen,
    setSidebarOpen
}) => {
    const [discover, setDiscover] = useState(false);
    const [dashboard, setDashboard] = useState(false);

    return (
        <div>
            {
                sidebarOpen ? (
                    <div className={styles.sidebar}>
                        <GrClose className={styles.close_icon} onClick={() => setSidebarOpen(false)} />
                        <div className={styles.sidebar_description}>
                            Discover the most outstanding articles on all topics of life. Write your stories and share them.
                        </div>
                        <div className={styles.sidebar_search_box_container}>
                            <input type='text' placeholder='Search' />
                            <BsSearch />
                        </div>
                        <div className={styles.discover_container}>
                            <p onClick={() => setDiscover(prev => !prev)}>
                                Discover
                                {
                                    discover ? <MdArrowDropUp /> : <MdArrowDropDown />
                                }
                            </p>
                            {
                                discover ? (
                                    <div className={styles.discover_container_inner}>
                                        <ul>
                                            {
                                                d.map(item => (
                                                    <li key={item.id}>
                                                        <Link to={item.path} onClick={() => setSidebarOpen(false)}>{item.name}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ) : null
                            }
                        </div>
                        <div className={styles.discover_container}>
                            <p onClick={() => setDashboard(prev => !prev)}>
                                Dashboard
                                {
                                    dashboard ? <MdArrowDropUp /> : <MdArrowDropDown />
                                }
                            </p>
                            {
                                dashboard ? (
                                    <div className={styles.discover_container_inner}>
                                        <ul>
                                            {
                                                dashboardMenu.map(item => (
                                                    <li key={item.id}>
                                                        <Link to={item.path} onClick={() => setSidebarOpen(false)}>{item.name}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ) : null
                            }
                        </div>
                        <div className={styles.create_button_container}>
                            <Button path="/upload-item" name="Create" />
                        </div>
                    </div>
                ) : null
            }
        </div >
    )
}

export default Sidebar