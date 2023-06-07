import React, { useState } from 'react'
import { FcApproval } from "react-icons/fc"
import author from "../../assets/images/author.png"
import { Activity, Analytics, AuthorAbout, Button, Followers, NFTItems } from "../../components/indexComponents"
import styles from "./AuthorProfile.module.css"

const AuthorProfile = () => {
    const [activeTab, setActiveTab] = useState("nftItems");

    return (
        <div className={styles.author_profile_container}>
            <div className={styles.author_profile_bg}>
                <div className={styles.author_info_container_infos}>
                    <p><b>42%</b> Unique</p>
                    <p><b>10%</b> Listed</p>
                    <p><b>1.76</b> Floor Price</p>
                </div>
                <div className={styles.author_info_container}>
                    <img src={author} alt="author" />
                    <h2>Surfiya Zakir <FcApproval /></h2>
                    <small>@surfiyazakir22</small>
                    <button>Follow</button>
                </div>
                <div className={styles.author_info_container_infos}>
                    <p><b>42</b> Owner</p>
                    <p><b>10,564</b> Volum</p>
                    <p><b>1.76</b> Floor Price</p>
                </div>
            </div>
            <div className={styles.author_description}>
                <p>A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury experiences and activations paid for by the Doodles Community Treasury.</p>
                <p>A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury experiences and activations paid for by the Doodles Community Treasury.</p>
                <p>A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury experiences and activations paid for by the Doodles Community Treasury.</p>
            </div>
            <div className={styles.tabs}>
                <p className={activeTab === "nftItems" ? styles.active_tab : styles.tab} onClick={() => setActiveTab("nftItems")}>NFT Items</p>
                <p className={activeTab === "analytics" ? styles.active_tab : styles.tab} onClick={() => setActiveTab("analytics")}>Analytics</p>
                <p className={activeTab === "followers" ? styles.active_tab : styles.tab} onClick={() => setActiveTab("followers")}>Followers</p>
                <p className={activeTab === "activity" ? styles.active_tab : styles.tab} onClick={() => setActiveTab("activity")}>Activity</p>
                <p className={activeTab === "about" ? styles.active_tab : styles.tab} onClick={() => setActiveTab("about")}>About</p>
            </div>
            {
                activeTab === "nftItems" ? <NFTItems />
                    : activeTab === "analytics" ? <Analytics />
                        : activeTab === "followers" ? <Followers />
                            : activeTab === "activity" ? <Activity />
                                : activeTab === "about" ? <AuthorAbout />
                                    : null
            }
            <div className={styles.create_nft_container}>
                <h1>Create your own NFT’s.</h1>
                <p>Discover the most outstanding NTFs in all topics of life. Creative your NTFs and sell them.</p>
                <div className={styles.actions}>
                    <Button name="Subscribe Now" path="/subscription" />
                </div>
            </div>
        </div>
    )
}

export default AuthorProfile