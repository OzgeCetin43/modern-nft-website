import React, { useState } from 'react'
import { WalletDialog } from '../../components/indexComponents'
import { wallets } from "../../assets/data/wallets"
import styles from "./ConnectWallet.module.css"

const ConnectWallet = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={styles.connect_wallet_container}>
            <h1 className={styles.connect_wallet_title}>Connect your wallet</h1>
            <p className={styles.connect_wallet_description}>Connect with one of our available wallet providers or create a new one.</p>
            <hr />
            <div className={styles.wallets}>
                {
                    wallets.map(wallet => (
                        <div className={styles.wallet} key={wallet.id} onClick={() => setIsOpen(true)}>
                            <img src={wallet.image} alt="wallet" />
                            <p>{wallet.name}</p>
                        </div>
                    ))
                }
            </div>
            {
                isOpen ? <WalletDialog setIsOpen={setIsOpen} />
                    : null
            }
        </div>
    )
}

export default ConnectWallet