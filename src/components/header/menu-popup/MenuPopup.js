import React from "react"
import styles from "./MenuPopup.module.sass"

const MenuPopup = ({ menus, isMenuOpened }) => {
	return (
		<div
			className={`${styles.menuContainer} ${
				isMenuOpened ? styles.menuContainerOpen : styles.menuContainerClose
			}`}
		>
			<ul>
				{menus.map((val, idx) => {
					return (
						<li key={idx}>
							<a href={val.url}>{val.text}</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default MenuPopup
