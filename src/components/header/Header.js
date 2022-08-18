import React from "react"
import styles from "./Header.module.sass"
import Hamburger from "hamburger-react"
import { useState } from "react"
import MenuPopup from "./menu-popup/MenuPopup"
import { menus } from "../../data"

const Header = ({ contacts, isIntersecting }) => {
	const [menuOpened, setMenuOpened] = useState(false)

	return (
		<>
			<header
				className={`${styles.headerContainer} ${
					isIntersecting ? "" : styles.headerScrolled
				}`}>
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
						color={isIntersecting ? "white" : "#204374"}
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
					isIntersecting={isIntersecting}
					menus={menus}
					isMenuOpened={menuOpened}
					setMenuOpened={setMenuOpened}
					contacts={contacts}></MenuPopup>
			</div>
		</>
	)
}

export default Header
