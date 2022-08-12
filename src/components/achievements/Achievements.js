import React from 'react'
import AchievementCard from './card/AchievementCard'
import styles from './Achievements.module.sass'

const Achievements = () => {
    let achievements = [
        {
            image: "dummy-old.png",
        },
        {
            image: "dummy-old.png",
        },
        {
            image: "dummy-old.png",
        },
        {
            image: "dummy-old.png",
        },
        {
            image: "dummy-old.png",
        },
        {
            image: "dummy-old.png",
        },
    ]
    return (
        <div className={styles.sectionContainer} id="achievements">
            <div className={styles.projectContainer}>
                <div className={styles.title}>
                    Achievements
                </div>
                <div className={styles.cardContainer}>
                    {achievements.map((val, idx) => {
                        return (
                            <AchievementCard achievement={val} />
                        )
                    })}
                </div>
		    </div>
        </div>
    )
}

export default Achievements
