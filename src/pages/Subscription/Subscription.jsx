import React from 'react'
import styles from "./Subscription.module.css"

const Subscription = () => {
    return (
        <div className={styles.subscription_main_container}>
            <h1 className={styles.subscription_title}>Subscription</h1>
            <p className={styles.subscription_description}>Pricing to fit the needs of any companie size.</p>
            <div className={styles.subscription_container}>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <div className={styles.card_title}>
                            <h1>STARTER</h1>
                        </div>
                        <div className={styles.card_price}>
                            <h1>$19.99</h1>
                            <h4>PER MONTH</h4>
                        </div>
                        <ul>
                            <li>
                                &#10003; <span>Automated Reporting</span>
                            </li>
                            <li>
                                &#10003; <span>Faster Processing</span>
                            </li>
                            <li>
                                &#10003; <span>Customizations</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <div className={styles.card_title}>
                            <h1>PREMIUM</h1>
                            <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                        </div>
                        <div className={styles.card_price}>
                            <h1>$38.88</h1>
                            <h4>PER MONTH</h4>
                        </div>
                        <ul>
                            <li>
                                &#10003; <span>Free Support 24/7</span>
                            </li>
                            <li>
                                &#10003; <span>Unlimited Builds</span>
                            </li>
                            <li>
                                &#10003; <span>Advanced Analytics</span>
                            </li>
                            <li>
                                &#10003; <span>Company Evaluations</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <div className={styles.card_title}>
                            <h1>BASIC</h1>
                        </div>
                        <div className={styles.card_price}>
                            <h1>$25.73</h1>
                            <h4>PER MONTH</h4>
                        </div>
                        <ul>
                            <li>
                                &#10003; <span>Everything in Starter</span>
                            </li>
                            <li>
                                &#10003; <span>100 Builds</span>
                            </li>
                            <li>
                                &#10003; <span>Progress Reports</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription