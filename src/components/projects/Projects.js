import React, { useEffect, useState } from "react"
import { FaGithub, FaLink } from "react-icons/fa"
import ProjectCard from "./card/ProjectCard"
import styles from "./Projects.module.sass"

const Projects = () => {
	const [projects, setProjects] = useState([])
	const components = {
		github: <FaGithub />,
		link: <FaLink />
	}

	async function fetchProjects(){
		const response = await fetch('/data/projects.json')
		const json = await response.json()
		const res = json.projects

		res.map((val) => {
			return val.links.map((v) => v.icon = components[v.icon])
		})

		setProjects(res)
	}

	useEffect(() => {
		fetchProjects()
	}, [])
	
	return (
		<div className={styles.sectionContainer} id='projects'>
			<div className={styles.projectContainer}>
				<div className={styles.title}>Projects</div>
				{projects.map((val, idx) => 
					<ProjectCard key={idx} project={val} idx={idx} />
				)}
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
