import React from "react"
import ProjectCard from "./card/ProjectCard"
import styles from "./Projects.module.sass"
import { projects } from "../../data"

const Projects = () => {
	return (
		<div className={styles.sectionContainer} id='projects'>
			<div className={styles.projectContainer}>
				<div className={styles.title}>Projects</div>
				{projects.map((val, idx) => {
					return <ProjectCard key={idx} project={val} idx={idx} />
				})}
				{projects.length > 5 && (
					<a href='/' className={styles.seeMoreBtn}>
						View More
					</a>
				)}
			</div>
		</div>
	)
}

export default Projects
