import React from "react"
import styles from "./MenuPopup.module.sass"

const MenuPopup = ({ menus, isMenuOpened, contacts }) => {
	return (
		<nav
			className={`${styles.menuContainer} ${
				isMenuOpened ? styles.menuContainerOpen : ""
			}`}>
			<ul className={styles.linkContainer}>
				{menus.map((val, idx) => {
					return (
						<li key={idx} className={styles.menuPopupItem}>
							<a href={val.url}>{val.text}</a>
						</li>
					)
				})}
			</ul>

			<ul className={styles.contactContainer}>
				{contacts.map((val, idx) => {
					return (
						<li key={idx} className={styles.menuPopupItem}>
							<a href={val.url}>{val.icon}</a>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default MenuPopup
