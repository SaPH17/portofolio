import React from 'react'
import styles from './AchievementCard.module.sass'

const AchievementCard = ({ achievement }) => {
    const prefix = "/assets/"

    return (
        <div className={styles.imageContainer}>
            <div className={styles.imageBackground} style={{backgroundImage: `url(${prefix + achievement.image})`}} alt=""/>
            as
        </div>
    )
}

export default AchievementCard
