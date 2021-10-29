import React from "react"
import styles from "./Header.module.sass"
import Hamburger from "hamburger-react"
import { useState } from "react"
import MenuPopup from "./menu-popup/MenuPopup"

const Header = () => {
	const menus = [
		{ text: "About Me", url: "" },
		{ text: "Projects", url: "" },
		{ text: "Achievements", url: "" },
		{ text: "Contacts", url: "" },
	]

	const [menuOpened, setMenuOpened] = useState(false)

	return (
		<header className={styles.headerContainer}>
			<div className={styles.logoContainer}>
				<a href='/'>stepadity</a>
				{/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#e65454" d="M48,-43.9C64.4,-31.5,81.7,-15.7,82.2,0.5C82.7,16.8,66.5,33.6,50,46.5C33.6,59.5,16.8,68.6,-2.5,71.1C-21.9,73.7,-43.7,69.6,-54.5,56.7C-65.3,43.7,-65.1,21.9,-62.5,2.6C-59.9,-16.7,-54.9,-33.3,-44.1,-45.7C-33.3,-58.1,-16.7,-66.2,-0.5,-65.8C15.7,-65.3,31.5,-56.3,48,-43.9Z" transform="translate(100 100)" />
                </svg> */}
			</div>
			<nav className={styles.navMenuContainer}>
				<ul>
					{menus.map((val, idx) => {
						return (
							<li key={idx}>
								<a href={val.url}>{val.text}</a>
							</li>
						)
					})}
				</ul>
			</nav>
			<nav className={styles.navMenuContainerResponsive}>
				{/* <FaBars
					color='white'
					size='1.25rem'
					onClick={() => {
						setMenuOpened(!menuOpened)
					}}
				></FaBars> */}
				<Hamburger
					color='white'
					size='20'
					rounded
					hideOutline={false}
					toggled={menuOpened}
					toggle={setMenuOpened}
				/>

				<div className={styles.navMenu}>
					<MenuPopup menus={menus} isMenuOpened={menuOpened}></MenuPopup>
				</div>
			</nav>
		</header>
	)
}

export default Header
