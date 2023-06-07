import React from 'react'
import { BsSearch, BsArrowRight } from 'react-icons/bs'
import { CollectionFilters, CollectionsContainer, EarnCrypto, TopCollections } from "../../components/indexComponents"
import styles from "./Search.module.css"

const Search = () => {
    return (
        <div className={styles.search_container}>
            <div className={styles.search_bg} />
            <div className={styles.search_input_container}>
                <BsSearch />
                <input type='text' placeholder='Search' />
                <BsArrowRight />
            </div>
            <div className={styles.search_filters}>
                <button className={styles.all_nfts_filter}>All NFTs</button>
                <button className={styles.other_filter}>Arts</button>
                <button className={styles.other_filter}>Music</button>
                <button className={styles.other_filter}>Sports</button>
                <button className={styles.other_filter}>Jewels</button>
            </div>
            <CollectionFilters />
            <CollectionsContainer />
            <TopCollections />
            <EarnCrypto />
        </div>
    )
}

export default Search