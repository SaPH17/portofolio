import React from "react"
import ProjectCard from './card/ProjectCard'
import styles from "./Projects.module.sass"
import { FaGithub, FaLink } from "react-icons/fa"

const Projects = () => {
	const projects = [
		{
			title: "netPHlix",
			description: "Netflix clone made using HTML, CSS, JS and PHP for NAR case",
			image: 'dummy-old.png',
			links: [
				{
					url: "https://github.com/SaPH17/netphlix",
					icon: <FaGithub />
				},
				{
					url: "https://www.netphlix.stepadity.com/",
					icon: <FaLink />
				}
			]
		},
		{
			title: "Project Title",
			description: "This is project description",
			image: 'dummy-old.png',
			links: [
				{
					url: "https://github.com/",
					icon: <FaGithub />
				},
				{
					url: "https://www.youtube.com/",
					icon: <FaLink />
				}
			]
		},
		{
			title: "Project Title",
			description: "This is project description",
			image: 'dummy-old.png',
			links: [
				{
					url: "https://github.com/",
					icon: <FaGithub />
				},
				{
					url: "https://www.youtube.com/",
					icon: <FaLink />
				}
			]
		},
		{
			title: "Project Title",
			description: "This is project description",
			image: 'dummy-old.png',
			links: [
				{
					url: "https://github.com/",
					icon: <FaGithub />
				},
				{
					url: "https://www.youtube.com/",
					icon: <FaLink />
				}
			]
		},
		{
			title: "Project Title",
			description: "This is project description",
			image: 'dummy-old.png',
			links: [
				{
					url: "https://github.com/",
					icon: <FaGithub />
				},
				{
					url: "https://www.youtube.com/",
					icon: <FaLink />
				}
			]
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
			<a href="/" className={styles.seeMoreBtn}>
				View More
			</a>
		</div>
	</div>
}

export default Projects
