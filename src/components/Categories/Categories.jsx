import React from 'react'
import { Button } from "../indexComponents"
import { categories } from "../../assets/data/categories"
import styles from "./Categories.module.css"

const Categories = () => {
    return (
        <div className={styles.categories_container}>
            <h1 className={styles.categories_title}>Browse by category.</h1>
            <p className={styles.categories_description}>Explore the NFTs in the most featured categories</p>
            <div className={styles.categories}>
                {
                    categories.map(category => (
                        <div className={styles.category} key={category.id}>
                            <img src={category.image} alt="" />
                            <div className={styles.category_info}>
                                <div className={styles.circle} />
                                <div className={styles.category_info_inner}>
                                    <p>{category.name}</p>
                                    <small>{category.nftNumber} NFTs</small>
                                </div>
                                <div className={styles.button_container}>
                                    <Button path="/collection" name="For More" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories