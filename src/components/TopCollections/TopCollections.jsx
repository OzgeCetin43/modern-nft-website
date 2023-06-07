import React from 'react'
import { HiArrowUpRight } from "react-icons/hi2"
import { collections } from '../../assets/data/collections'
import styles from "./TopCollections.module.css"
import { Link } from 'react-router-dom'

const TopCollections = () => {
    return (
        <div className={styles.top_collections_container}>
            <div className={styles.top_collections_header}>
                <div>
                    <h1 className={styles.top_collections_title}>Top collections.</h1>
                    <p className={styles.top_collections_description}>Discover the new creative economy</p>
                </div>
            </div>
            <div className={styles.collection_items}>
                {
                    collections.map(collection => (
                        <div className={styles.collection_item} key={collection.id}>
                            <img src={collection.images.image1} alt="collection" className={styles.collection_main} />
                            <div className={styles.collection_item_inner}>
                                <div className={styles.collection_item_creator_container}>
                                    <img src={collection.creator} alt="creator" />
                                    <small>by {collection.creatorName}</small>
                                </div>
                                <h1>{collection.name}</h1>
                                <div className={styles.collections}>
                                    <img src={collection.images.image2} alt="collection" />
                                    <img src={collection.images.image3} alt="collection" />
                                    <img src={collection.images.image4} alt="collection" />
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className={styles.more_collection_container}>
                    <h2>Collections <HiArrowUpRight /></h2>
                    <Link to="/search">Show me more</Link>
                </div>
            </div>
        </div >
    )
}

export default TopCollections