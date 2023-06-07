import React from 'react'
import { GrClose } from "react-icons/gr"
import qrCode from "../../assets/images/qr_code.webp"
import styles from "./WalletDialog.module.css"

const WalletDialog = ({
    setIsOpen
}) => {
    return (
        <div className={styles.wallet_dialog_container} onClick={() => setIsOpen(false)}>
            <div className={styles.dialog}>
                <GrClose onClick={() => setIsOpen(false)} />
                <h2>Connect Wallet</h2>
                <hr />
                <h3>Scan to connect</h3>
                <p>Open Coinbase Wallet on your mobile phone and scan</p>
                <img src={qrCode} alt="wallet qr code" />
                <div className={styles.actions}>
                    <button className={styles.dark_button}>Install App</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default WalletDialog