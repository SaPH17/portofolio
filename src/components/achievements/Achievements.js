import React, { useEffect, useState } from "react"
import AchievementCard from "./card/AchievementCard"
import styles from "./Achievements.module.sass"

const Achievements = () => {
	const [achievements, setAchievements] = useState([])

	async function fetchAchievements(){
		const response = await fetch('/data/achievements.json')
		const json = await response.json()
		const res = json.achievements

		setAchievements(res)
	}

	useEffect(() => {
		fetchAchievements()
	}, [])

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
