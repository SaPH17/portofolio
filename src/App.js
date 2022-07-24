import Banner from "./components/banner/Banner"
import Header from "./components/header/Header"
import "./App.css"
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"

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

	return (
		<>
			<Header contacts={contacts} />
			<Banner contacts={contacts} />
		</>
	)
}

export default App
