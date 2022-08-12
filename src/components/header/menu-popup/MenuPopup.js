import React from "react"
import styles from "./MenuPopup.module.sass"

const MenuPopup = ({ isIntersecting, menus, isMenuOpened, contacts }) => {
	return (
		<nav
			className={`${styles.menuContainer} ${
				isMenuOpened ? styles.menuContainerOpen : ""
			} ${
				isIntersecting ? "" : styles.menuContainerScrolled 
			}`}>
			<ul className={styles.linkContainer}>
				{menus.map((val, idx) => {
					return (
						<li key={idx} className={styles.menuPopupItem} style={{pointerEvents: `${isMenuOpened ? 'auto' : 'none'}`}}>
							<a href={val.url}>{val.text}</a>
						</li>
					)
				})}
			</ul>

			<ul className={styles.contactContainer}>
				{contacts.map((val, idx) => {
					return (
						<li key={idx} className={styles.menuPopupItem} style={{pointerEvents: `${isMenuOpened ? 'auto' : 'none'}`}}>
							<a href={val.url}>{val.icon}</a>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default MenuPopup
