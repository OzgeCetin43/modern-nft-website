import React from 'react'
import { BsClockHistory } from "react-icons/bs"
import { collectionsContainer } from '../../assets/data/collectionsContainer'
import styles from "./CollectionsContainer.module.css"

const CollectionsContainer = () => {
    return (
        <div className={styles.collections_container}>
            {
                collectionsContainer.map(collection => (
                    <div className={styles.collection_item} key={collection.id}>
                        <img src={collection.image} alt="collection" className={styles.collection_image} />
                        <div className={styles.collection_info_container}>
                            <div className={styles.collection_users}>
                                <img src={collection.users.user1} alt="users" />
                                <img src={collection.users.user2} alt="users" />
                                <img src={collection.users.user3} alt="users" />
                                <img src={collection.users.user4} alt="users" />
                            </div>
                            <div className={styles.stock_container}>{collection.stock} in stock</div>
                        </div>
                        <h1 className={styles.collection_name}>{collection.name}</h1>
                        <hr />
                        <div className={styles.collection_info_container}>
                            <div className={styles.price_container}>
                                <small>Price</small>
                                <h3>{collection.price}</h3>
                            </div>
                            <div className={styles.remaining_time_container}>
                                <BsClockHistory />
                                <span>{collection.remainingTime} hours left</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CollectionsContainer