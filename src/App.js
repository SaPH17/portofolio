import Banner from "./components/banner/Banner"
import Header from "./components/header/Header"
import Projects from "./components/projects/Projects"
import Achievements from './components/achievements/Achievements'
import "./App.css"
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"
import useIntersectionObserver from "./hooks/useIntersectionObserver"

function App() {
	const contacts = [
		{
			icon: <FaInstagram />,
			url: "https://www.instagram.com/stephanus_aditya/",
		},
		{ icon: <FaGithub />, url: "https://github.com/SaPH17" },
		{
			icon: <FaLinkedin />,
			url: "https://www.linkedin.com/in/stephanus-aditya-pratama-harjono-6608a01ab/",
		},
		{ icon: <FaEnvelope />, url: "mailto:stephanusaditya17@gmail.com" },
	]

	const options = {
		rootMargin: "-200px 0px 0px 0px",
	}

	const [containerRef, isIntersecting] = useIntersectionObserver(options)

	return (
		<>
			<Header contacts={contacts} isIntersecting={isIntersecting} />
			<Banner contacts={contacts} ref={containerRef} />
			<Projects />
			<Achievements />
		</>
	)
}

export default App
