import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"
import { CgMenuLeft, CgMenuRight } from "react-icons/cg"
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"
import { Dashboard, Discover, Sidebar } from "./index"
import { Button } from "../indexComponents"
import styles from "./Header.module.css"

const Header = () => {
    const [discover, setDiscover] = useState(false)
    const [dashboard, setDashboard] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <header className={styles.header}>
            <div className={styles.header_left}>
                <Link to="/" className={styles.header_logo_container}>
                    <div className={styles.header_brand}>NFTopia</div>
                </Link>
                <div className={styles.header_search_box_container}>
                    <input type='text' placeholder='Search' />
                    <BsSearch />
                </div>
            </div>
            <div className={styles.header_center} />
            <div className={styles.header_right}>
                <div className={styles.discover_container}>
                    <p onClick={() => setDiscover(prev => !prev)}>
                        Discover
                        {
                            discover ? <MdArrowDropUp /> : <MdArrowDropDown />
                        }
                    </p>
                    {
                        discover ? <Discover discover={discover} setDiscover={setDiscover} /> : null
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
                        dashboard ? <Dashboard dashboard={dashboard} setDashboard={setDashboard} /> : null
                    }
                </div>
                <div className={styles.create_button_container}>
                    <Button path="/upload-item" name="Create" />
                </div>
            </div>
            <div className={styles.mobile_menu}>
                {
                    sidebarOpen ? (
                        <div>
                            <CgMenuRight onClick={prev => setSidebarOpen(prev => !prev)} />
                            <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
                        </div>
                    ) : <CgMenuLeft onClick={prev => setSidebarOpen(prev => !prev)} />
                }
            </div>
        </header>
    )
}

export default Header