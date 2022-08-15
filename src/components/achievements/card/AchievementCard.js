import React from "react"
import styles from "./AchievementCard.module.sass"

const AchievementCard = ({ achievement }) => {
	const prefix = "/assets/"

	return (
		<div className={styles.imageContainer}>
			<img
				className={styles.achievementImage}
				src={`${prefix + achievement.image}`}
				alt=''
			/>
			<div className={styles.achievementContent}>
				<span>{achievement.description}</span>
			</div>
		</div>
	)
}

export default AchievementCard
