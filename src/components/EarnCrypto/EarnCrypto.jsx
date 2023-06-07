import React from 'react'
import hero from "../../assets/images/collection_banner.jpg"
import { Button } from "../indexComponents"
import styles from "./EarnCrypto.module.css"

const EarnCrypto = () => {
    return (
        <div className={styles.earn_crypto_container}>
            <div className={styles.earn_crypto_container_left}>
                <h1>Earn free crypto with NFTopia.</h1>
                <p>A creative agency that lead and inspire</p>
                <div className={styles.actions}>
                    <Button path="/upload-item" name="Create Item" />
                    <Button path="/search" name="Discover More" />
                </div>
            </div>
            <div className={styles.earn_crypto_container_right}>
                <img src={hero} alt="earn crypto" />
            </div>
        </div>
    )
}

export default EarnCrypto