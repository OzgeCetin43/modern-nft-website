import React from 'react'
import { BiImageAdd } from "react-icons/bi"
import styles from "./AccountSettings.module.css"

const AccountSettings = () => {
    return (
        <div className={styles.account_settings_main_container}>
            <h1>Profile Settings</h1>
            <p>You can set preferred display name, create your profile URL and manage other personal settings.</p>
            <hr />
            <div className={styles.account_settings_container}>
                <div className={styles.account_settings_left}>
                    <div className={styles.profile_image_container}>
                        <BiImageAdd />
                        <small>Change Image</small>
                    </div>
                </div>
                <div className={styles.account_settings_right}>
                    <h3>Account information</h3>
                    <div className={styles.input_containers}>
                        <div>
                            <small>Name</small>
                            <input placeholder='Enter your name' />
                        </div>
                        <div>
                            <small>Email</small>
                            <input placeholder='Enter your email' />
                        </div>
                    </div>
                    <div className={styles.input_containers}>
                        <div>
                            <small>Username</small>
                            <input placeholder='Enter your name' />
                        </div>
                        <div>
                            <small>Contact No.</small>
                            <input placeholder='Enter your contact number' />
                        </div>
                    </div>
                    <div className={styles.bio_container}>
                        <textarea placeholder='About me' rows={15}></textarea>
                    </div>
                    <h3>General Information</h3>
                    <div className={styles.input_containers_options}>
                        <div>
                            <small>Language</small>
                            <select defaultValue="en">
                                <option value="en">English</option>
                                <option value="tr">Türkçe</option>
                            </select>
                        </div>
                        <div>
                            <small>Currency</small>
                            <select defaultValue="eth">
                                <option value="eth">Etherium</option>
                                <option value="btc">Bitcoin</option>
                            </select>
                        </div>
                    </div>
                    <h3>Social Settings</h3>
                    <div className={styles.input_containers}>
                        <div>
                            <small>Facebook</small>
                            <input placeholder='Facebook' />
                        </div>
                        <div>
                            <small>Twitter</small>
                            <input placeholder='Twitter' />
                        </div>
                    </div>
                    <div className={styles.input_containers}>
                        <div>
                            <small>Instagram</small>
                            <input placeholder='Instagram' />
                        </div>
                        <div>
                            <small>Twitch</small>
                            <input placeholder='Twitch' />
                        </div>
                    </div>
                    <div className={styles.input_containers}>
                        <div>
                            <small>Telegram</small>
                            <input placeholder='Telegram' />
                        </div>
                        <div>
                            <small>Discord</small>
                            <input placeholder='Discord' />
                        </div>
                    </div>
                    <div className={styles.input_containers}>
                        <div>
                            <small>Wallet Address</small>
                            <input placeholder='0x1bde388826caab77bfe80148abdce6830606e2c6' />
                        </div>
                        <div>
                            <small>Action</small>
                            <button>Update Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSettings