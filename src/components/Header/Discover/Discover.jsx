import React from 'react'
import { Link } from 'react-router-dom'
import { discover as d } from '../../../assets/data/discover'
import styles from "./Discover.module.css"

const Discover = ({
    discover,
    setDiscover
}) => {
    return (
        <div>
            {
                discover ? (
                    <div className={styles.discover_container}>
                        <ul>
                            {
                                d.map(item => (
                                    <li key={item.id}>
                                        <Link to={item.path} onClick={() => setDiscover(false)}>{item.name}</Link>
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

export default Discover