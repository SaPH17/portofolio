import React from "react"
import styles from "./Banner.module.sass"

const Banner = React.forwardRef(({ contacts }, ref) => {
	return (
		<div className={styles.bannerContainer} ref={ref}>
			<div className={styles.subtitle}>Hi, my name is</div>
			<div className={`${styles.title} ${styles.typewriterAnimation}`}>
				Stephanus Aditya
			</div>
			<div className={styles.titleResponsiveContainer}>
				<div
					className={`${styles.titleResponsive} ${styles.titleResponsiveTop}`}>
					Stephanus
				</div>
				<div
					className={`${styles.titleResponsive} ${styles.titleResponsiveBot}`}>
					Aditya
				</div>
			</div>
			<ul className={styles.contactContainer}>
				{contacts.map((val, idx) => {
					return (
						<li key={idx}>
							<a href={val.url}>{val.icon}</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
})

export default Banner
