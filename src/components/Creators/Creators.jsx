import React, { useEffect, useState } from 'react'
import { FiUserCheck, FiUserPlus, FiUser, FiUsers } from "react-icons/fi"
import { creators } from '../../assets/data/creators'
import styles from "./Creators.module.css"

const Creators = () => {
    const [activeFilter, setActiveFilter] = useState("");
    const [filteredCreators, setFilteredCreators] = useState(creators);

    useEffect(() => {
        let temp = creators;
        if (activeFilter !== "")
            temp = creators.filter(x => x.filter === activeFilter);

        setFilteredCreators(temp);
    }, [activeFilter])

    return (
        <div className={styles.cretors_container}>
            <h1 className={styles.creators_title}>Top List Creators.</h1>
            <div className={styles.filter_buttons}>
                <button onClick={() => setActiveFilter("popular")}>
                    <FiUserCheck />
                    <small>Popular</small>
                </button>
                <button onClick={() => setActiveFilter("following")}>
                    <FiUserPlus />
                    <small>Following</small>
                </button>
                <button onClick={() => setActiveFilter("new")}>
                    <FiUser />
                    <small>New and Noteworthy</small>
                </button>
                <button onClick={() => setActiveFilter("")}>
                    <FiUsers />
                    <small>All</small>
                </button>
            </div>
            <ul className={styles.creators}>
                {
                    filteredCreators.map(creator => (
                        <li className={styles.creator} key={creator.id}>
                            <img src={creator.bg} alt="background" className={styles.creator_bg} />
                            <img src={creator.cretaor} alt="creator" className={styles.creator_image} />
                            <p className={styles.creator_name}>{creator.creatorName}</p>
                            <p>@creator</p>
                            <p className={styles.creator_description}>X-Metaverse is a Star Wars game based on NFT + blockchain exploration, mining, trading ...</p>
                            <h3>{creator.price} ETH</h3>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Creators