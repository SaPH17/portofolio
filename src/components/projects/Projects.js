import React from "react"
import ProjectCard from './card/ProjectCard'
import styles from "./Projects.module.sass"

const Projects = () => {
	const projects = [
		{
			title: "Project Title",
			description: "This is project description",
			image: 'dummy-old.png'
		},
		{
			title: "Project Title",
			description: "This is project description",
			image: 'dummy-old.png'
		},
		{
			title: "Project Title",
			description: "This is project description",
			image: 'dummy-old.png'
		},
		{
			title: "Project Title",
			description: "This is project description",
			image: 'dummy-old.png'
		},
		{
			title: "Project Title",
			description: "This is project description",
			image: 'dummy-old.png'
		},
	]

	return <div className={styles.sectionContainer} id="projects">
		<div className={styles.projectContainer}>
			<div className={styles.title}>
				Projects
			</div>
			{projects.map((val, idx) => {
				return (
					<ProjectCard key={idx} project={val} idx={idx} />
				)
			})}
		</div>
	</div>
}

export default Projects
