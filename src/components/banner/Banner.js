import React from "react"
import styles from "./Banner.module.sass"

const Banner = () => {
	return (
		<div className={styles.bannerContainer}>
			<div className={styles.subtitle}>Hi, my name is</div>
			<div className={`${styles.title} ${styles.typewriterAnimation}`}>
				Stephanus Aditya
			</div>
			<div className={styles.titleResponsiveContainer}>
				<div
					className={`${styles.titleResponsive} ${styles.titleResponsiveTop}`}
				>
					Stephanus
				</div>
				<div
					className={`${styles.titleResponsive} ${styles.titleResponsiveBot}`}
				>
					Aditya
				</div>
			</div>
		</div>
	)
}

export default Banner
