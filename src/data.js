import { FaGithub, FaLink } from "react-icons/fa"

export const menus = [
	{ text: "About Me", url: "" },
	{ text: "Projects", url: "/#projects" },
	{ text: "Achievements", url: "/#achievements" },
	{ text: "Contacts", url: "" },
]

export const projects = [
	{
		title: "netPHlix",
		description: "Netflix clone made using HTML, CSS, JS and PHP for NAR case",
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
	{
		title: "Personal Website",
		description: "My portofolio website, made using React",
		image: "portofolio-preview.webp",
		links: [
			{
				url: "https://github.com/SaPH17/portofolio",
				icon: <FaGithub />,
				tooltip: "View Github",
			},
			{
				url: "https://stepadity.com/",
				icon: <FaLink />,
				tooltip: "View Website",
			},
		],
	},
]

export const achievements = [
	{
		image: "achivements-starton.webp",
		description: "Second Place in Starton: Hackathon",
	},
	// {
	// 	image: "dicoding-android.webp",
	// 	description: "Dicoding Android Course",
	// },
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
	{
		image: "AWS Certified Cloud Practitioner certificate.webp",
		description: "AWS Certified Cloud Practitioner",
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
