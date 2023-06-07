import React from 'react'
import { Link } from "react-router-dom"
import { BsGoogle, BsApple } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import styles from "./Login.module.css"

const Login = () => {
    return (
        <div className={styles.login_container}>
            <div className={styles.login_inner_container}>
                <h1>NFTopia - Login</h1>
                <h3>Login into your account</h3>
                <p>Enter your information to get started.</p>
                <form>
                    <input type='email' placeholder='Enter your email' />
                    <input type='password' placeholder='Enter your password' />
                    <button>Login</button>
                </form>
                <small>or sign in with</small>
                <div className={styles.social_media_container}>
                    <BsGoogle />
                    <FaFacebookF />
                    <BsApple />
                </div>
                <p className={styles.register_link}>New User? <Link to="/sign-up">Register</Link></p>
            </div>
        </div>
    )
}

export default Login