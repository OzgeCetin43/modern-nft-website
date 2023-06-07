import React from 'react'
import { Link } from "react-router-dom"
import { BsStarFill, BsStarHalf } from "react-icons/bs"
import customer1 from "../../assets/images/creator_1.svg"
import customer2 from "../../assets/images/creator_2.svg"
import customer3 from "../../assets/images/creator_3.svg"
import customer4 from "../../assets/images/creator_4.svg"
import styles from "./Contact.module.css"

const Contact = () => {
    return (
        <div className={styles.contact_us_container}>
            <div className={styles.contact_us_header}>
                <h1>Contact Us</h1>
                <div className={styles.link_container}>
                    <Link to="/">Home</Link>
                    <span> / Contact Us</span>
                </div>
            </div>
            <div className={styles.contact_us_inner_container}>
                <div className={styles.contact_us_left}>
                    <h2>Feel free to contact us to learn more.</h2>
                    <p>Our community and support helps you create a website fast and easy!</p>
                    <ul>
                        <li>
                            <div className={styles.circle} />
                            <div className={styles.item_info}>
                                <small>Phone No.</small>
                                <span>+ 90 000 000 00 00</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.circle} />
                            <div className={styles.item_info}>
                                <small>Email Address.</small>
                                <span>+ support@nftopia.net</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.circle} />
                            <div className={styles.item_info}>
                                <small>Address.</small>
                                <span>+ Shicago Heights, IL 500642</span>
                            </div>
                        </li>
                    </ul>
                    <div className={styles.contact_us_info_container}>
                        <div className={styles.contact_us_info_left}>
                            <div className={styles.customer_container}>
                                <img src={customer1} alt="customer" />
                                <img src={customer2} alt="customer" />
                                <img src={customer3} alt="customer" />
                                <img src={customer4} alt="customer" />
                            </div>
                            <div className={styles.customer_container_info}>
                                <p>2,452</p>
                                <small>Happy customer</small>
                            </div>
                        </div>
                        <div className={styles.contact_us_info_right}>
                            <small>4.7 customer feedback</small>
                            <div>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.contact_us_right}>
                    <h2>Send a message</h2>
                    <form>
                        <div className={styles.input_container}>
                            <div>
                                <label htmlFor="name">Name*</label>
                                <input type="text" id='name' name='name' />
                            </div>
                            <div>
                                <label htmlFor="email">Email*</label>
                                <input type="text" id='email' name='email' />
                            </div>
                        </div>
                        <div className={styles.input_container}>
                            <textarea name="message" id="message" rows="10" placeholder='Enter your message'></textarea>
                        </div>
                        <div className={styles.checkbox_container}>
                            <input type="checkbox" id="approve" name="approve" value="approve" />
                            <label htmlFor="approve">By clicking all term and condition apply out Privacy policy and Term and Conditions.</label>
                        </div>
                        <button type='submit' className={styles.button}>Send Message</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Contact