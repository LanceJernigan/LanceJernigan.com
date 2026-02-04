"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./projects.module.css";
import { projects } from "./data";

const Projects = () => {
	const [currentProject, setCurrentProject] = useState(projects.length % 2);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);
	const listRef = useRef<HTMLUListElement>(null);

	const handleProjectClick = (index: number) => () => {
		if (currentProject === index) {
			// setIsExpanded(true);
		} else {
			setCurrentProject(index);
			// setIsExpanded(false);
		}
	};

	useEffect(() => {
		const container = listRef.current;
		if (!container) return;

		const activeChild = container.children[currentProject] as HTMLElement;
		if (!activeChild) return;

		const offset =
			activeChild.offsetLeft -
			container.clientWidth / 2 +
			activeChild.clientWidth / 2;

		container.scrollTo({
			left: offset,
			behavior: isLoaded ? "smooth" : "instant",
		});

		if (!isLoaded) {
			setIsLoaded(true);
		}
	}, [currentProject, isLoaded]);

	return (
		<section className={styles.projects}>
			<div className={styles.wrapper}>
				<header className={styles.header}>
					<h2 className={styles.title}>Featured Projects</h2>
				</header>
				<ul
					className={styles.list}
					ref={listRef}
				>
					{projects.map((project, i) => (
						<li
							key={i}
							className={styles.item}
							data-active={currentProject === i ? "true" : "false"}
							// data-expanded={
							// 	isExpanded && currentProject === i ? "true" : "false"
							// }
							onClick={handleProjectClick(i)}
						>
							<article className={styles.project}>
								<div className={styles.imageWrapper}>
									<Image
										src={project.image.src}
										alt={project.image.alt}
										width={800}
										height={450}
										quality={100}
									/>
								</div>
								<div className={styles.content}>
									<h3 className={styles.projectTitle}>{project.title}</h3>
									<div className={styles.overview}>
										<p>{project.overview}</p>
										{/* <p className={styles.expandHint}>Read More</p> */}
									</div>
									{/* <div className={styles.projectDescription}>
										{project.description}
									</div> */}
								</div>
							</article>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Projects;
