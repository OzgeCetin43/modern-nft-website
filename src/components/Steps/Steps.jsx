import React from 'react'
import { steps } from "../../assets/data/steps"
import styles from "./Steps.module.css"

const Steps = () => {
    return (
        <div className={styles.steps_container}>
            <ul className={styles.steps}>
                {
                    steps.map(step => (
                        <li className={styles.step} key={step.id}>
                            <small className={styles.step_number}>Step 0{step.id}</small>
                            <h3 className={styles.step_title}>{step.title}</h3>
                            <p className={styles.step_description}>{step.description}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Steps