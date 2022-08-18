import React from "react"
import AchievementCard from "./card/AchievementCard"
import styles from "./Achievements.module.sass"
import { achievements } from "../../data"

const Achievements = () => {
	return (
		<div className={styles.sectionContainer} id='achievements'>
			<div className={styles.achievementContainer}>
				<div className={styles.title}>Achievements</div>
				<div className={styles.cardContainer}>
					{achievements.map((val, idx) => {
						return <AchievementCard achievement={val} key={idx} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Achievements
