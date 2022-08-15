import React from "react"
import styles from "./ProjectCard.module.sass"

const ProjectCard = ({ project, idx }) => {
	const prefix = "/assets/"

	return (
		<div
			className={`${styles.cardContainer} ${
				(idx + 1) % 2 === 0 ? styles.cardEven : styles.cardOdd
			}`}>
			<div
				className={styles.cardImage}
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.423)), url(${
						prefix + project.image
					})`,
				}}>
				<div className={styles.cardContent}>
					<div className={styles.cardNumber}>{"0" + (idx + 1)}</div>
					<div className={styles.cardTitle}>{project.title}</div>
					<div className={styles.cardDescription}>{project.description}</div>
					<div className={styles.cardButtonContainer}>
						{project.links.map((val, idx) => {
							return (
								<a
									key={idx}
									href={val.url}
									className={styles.cardButton}
									data-tooltip={val.tooltip}>
									{val.icon}
								</a>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
