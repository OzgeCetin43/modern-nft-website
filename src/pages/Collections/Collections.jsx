import React from 'react'
import { FaFacebookF, FaTwitter, FaShare } from "react-icons/fa"
import { FiMoreHorizontal } from "react-icons/fi"
import { collectionInfo } from '../../assets/data/collectionInfo'
import { CollectionFilters, CollectionsContainer, EarnCrypto, TopCollections } from '../../components/indexComponents'
import hero from "../../assets/images/collection_5.webp"
import styles from "./Collections.module.css"

const Collections = () => {
    return (
        <>
            <div className={styles.collections_container}>
                <div className={styles.collections_info_container}>
                    <div className={styles.collections_image_container}>
                        <img src={hero} alt="hero" />
                        <div className={styles.icons_container}>
                            <FaFacebookF />
                            <FaTwitter />
                            <FaShare />
                            <FiMoreHorizontal />
                        </div>
                    </div>
                    <div className={styles.collections_info_container_inner}>
                        <h1>Awesome NFTs Collection</h1>
                        <p>Karafuru is home to 5,555 generative arts where colors reign supreme. Leave the drab reality and enter the world of Karafuru by Museum of Toys.</p>
                        <div className={styles.collection_infos}>
                            <div className={styles.collection_info}>
                                {
                                    collectionInfo.map(info => (
                                        <div className={styles.collection_info_item} key={info.id}>
                                            <h3>{info.title}</h3>
                                            <p>{info.number}</p>
                                            <small>{info.detail}</small>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CollectionFilters />
            <CollectionsContainer />
            <TopCollections />
            <EarnCrypto />
        </>
    )
}

export default Collections