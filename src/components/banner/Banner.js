import React from 'react'
import styles from './Banner.module.sass';

const Banner = () => {

    return (
        <div className={styles.bannerContainer}>
            <div className={styles.subtitle}>
                Hi, my name is
            </div>
            <div className={styles.title}>
                Stephanus Aditya
            </div>
        </div>
    )
}

export default Banner
