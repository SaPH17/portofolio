import React from "react"
import ProjectCard from "./card/ProjectCard"
import styles from "./Projects.module.sass"
import { FaGithub, FaLink } from "react-icons/fa"

const Projects = () => {
	const projects = [
		{
			title: "netPHlix",
			description:
				"Netflix clone made using HTML, CSS, JS and PHP for NAR case",
			image: "netphlix-preview.webp",
			links: [
				{
					url: "https://github.com/SaPH17/netphlix",
					icon: <FaGithub />,
					tooltip: "View Github",
				},
				{
					url: "https://www.netphlix.stepadity.com/",
					icon: <FaLink />,
					tooltip: "View Website",
				},
			],
		},
		{
			title: "PHinterest",
			description:
				"PHinterest clone, also made using HTML, CSS, JS and PHP for NAR case",
			image: "phinterest-preview.webp",
			links: [
				{
					url: "https://github.com/SaPH17/phinterest",
					icon: <FaGithub />,
					tooltip: "View Github",
				},
				{
					url: "https://phinterest.stepadity.com/",
					icon: <FaLink />,
					tooltip: "View Website",
				},
			],
		},
		{
			title: "PHokemon unite",
			description:
				"A clone of the official Pokemon Unite website, made using HTML and SCSS for NAR",
			image: "phokemon-preview.webp",
			links: [
				{
					url: "https://github.com/SaPH17/phokemon-unite",
					icon: <FaGithub />,
					tooltip: "View Github",
				},
				{
					url: "https://phokemon-unite.stepadity.com/",
					icon: <FaLink />,
					tooltip: "View Website",
				},
			],
		},
		{
			title: "Google sliPHes",
			description:
				"A simple clone of Google Slides. Made using HTML, CSS, and JQuery for NAR",
			image: "sliphes-preview.webp",
			links: [
				{
					url: "https://github.com/SaPH17/google-sliphes",
					icon: <FaGithub />,
					tooltip: "View Github",
				},
				{
					url: "https://sliphes.stepadity.com/",
					icon: <FaLink />,
					tooltip: "View Website",
				},
			],
		},
	]

	return (
		<div className={styles.sectionContainer} id='projects'>
			<div className={styles.projectContainer}>
				<div className={styles.title}>Projects</div>
				{projects.map((val, idx) => {
					return <ProjectCard key={idx} project={val} idx={idx} />
				})}
				<a href='/' className={styles.seeMoreBtn}>
					View More
				</a>
			</div>
		</div>
	)
}

export default Projects
