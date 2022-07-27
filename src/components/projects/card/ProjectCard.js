import React from 'react'
import styles from './ProjectCard.module.sass'

const ProjectCard = ({ project, idx }) => {
    const prefix = "/assets/"

    return (
        <div className={`${styles.cardContainer} ${(idx + 1) % 2 === 0 ? styles.cardEven : styles.cardOdd}`}>
            <div className={styles.cardImage} style={{backgroundImage: `url(${prefix + project.image})`}}>
                <div className={styles.cardContent}>
                    <div className={styles.cardNumber}>
                        {"0" + (idx + 1)}
                    </div>
                    <div className={styles.cardTitle}>
                        {project.title}
                    </div>
                    <div className={styles.cardDescription}>
                        {project.description}
                    </div>
                    <div className={styles.cardButton}>
                        View Project
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
