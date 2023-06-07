import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Button.module.css"

const Button = ({
    path,
    name
}) => {
    return (
        <Link to={path} className={styles.button}>{name}</Link >
    )
}

export default Button