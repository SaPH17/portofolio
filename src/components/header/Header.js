import React from "react"
import styles from "./Header.module.sass"
import Hamburger from "hamburger-react"
import { useState } from "react"
import MenuPopup from "./menu-popup/MenuPopup"

const Header = ({ contacts }) => {
	const menus = [
		{ text: "About Me", url: "" },
		{ text: "Projects", url: "" },
		{ text: "Achievements", url: "" },
		{ text: "Contacts", url: "" },
	]

	const [menuOpened, setMenuOpened] = useState(false)

	return (
		<>
			<header className={styles.headerContainer}>
				<div className={styles.logoContainer}>
					<a href='/'>stepadity</a>
				</div>
				<nav className={styles.navMenuContainer}>
					<ul className={styles.linkContainer}>
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
					<Hamburger
						color='white'
						size='20'
						rounded
						hideOutline={true}
						toggled={menuOpened}
						toggle={setMenuOpened}
					/>
				</nav>
			</header>
			<div className={styles.navMenuPopupContainer}>
				<MenuPopup
					menus={menus}
					isMenuOpened={menuOpened}
					contacts={contacts}></MenuPopup>
			</div>
		</>
	)
}

export default Header
