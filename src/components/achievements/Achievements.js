import React from "react"
import AchievementCard from "./card/AchievementCard"
import styles from "./Achievements.module.sass"

const Achievements = () => {
	const achievements = [
		{
			image: "achivements-starton.webp",
			description: "Second Place in Starton: Hackathon",
		},
		{
			image: "dicoding-android.webp",
			description: "Dicoding Android Course",
		},
		// {
		// 	image: "dicoding-ar.webp",
		// 	description: "Dicoding AR Course",
		// },
		{
			image: "dicoding-aws1.webp",
			description: "Dicoding AWS Basic Course",
		},
		{
			image: "dicoding-aws2.webp",
			description: "Dicoding AWS Architecture Course",
		},
		// {
		// 	image: "dicoding-devops.webp",
		// 	description: "Dicoding DevOps Course",
		// },
		// {
		// 	image: "dicoding-jarkom.webp",
		// 	description: "Dicoding Networking Course",
		// },
		// {
		// 	image: "dicoding-java.webp",
		// 	description: "Dicoding Java Course",
		// },
	]
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
