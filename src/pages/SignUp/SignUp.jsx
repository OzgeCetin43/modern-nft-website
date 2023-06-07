import React from 'react'
import { Link } from "react-router-dom"
import { BsGoogle, BsApple } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import styles from "./SignUp.module.css"

const SignUp = () => {
    return (
        <div className={styles.sign_up_container}>
            <div className={styles.sign_up_inner_container}>
                <h1>NFTopia - Sign Up</h1>
                <h3>Create a new account</h3>
                <p>Enter your information to get started.</p>
                <form>
                    <input type='text' placeholder='Enter your name' />
                    <input type='email' placeholder='Enter your email' />
                    <span>Enter a valid email address.we will send a confirmation link for verificarion</span>
                    <input type='password' placeholder='Enter your password' />
                    <input type='password' placeholder='Confirm password' />
                    <div className={styles.checkbox_container}>
                        <input type="checkbox" id="approve" name="approve" value="approve" />
                        <label htmlFor="approve">By clicking all term and condition apply out Privacy policy and Term and Conditions.</label>
                    </div>
                    <button>Login</button>
                </form>
                <small>or sign in with</small>
                <div className={styles.social_media_container}>
                    <BsGoogle />
                    <FaFacebookF />
                    <BsApple />
                </div>
                <p className={styles.login_link}>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default SignUp