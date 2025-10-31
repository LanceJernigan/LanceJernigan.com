"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./projects.module.css";
import { projects } from "./data";

const Projects = () => {
	const [currentProject, setCurrentProject] = useState(2);
	const [isLoaded, setIsLoaded] = useState(false);
	const listRef = useRef<HTMLUListElement>(null);

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
							onClick={() => setCurrentProject(i)}
						>
							<article className={styles.project}>
								<div className={styles.imageWrapper}>
									<Image
										src={project.image.src}
										alt={project.image.alt}
										width={700}
										height={467}
									/>
								</div>
								<div className={styles.content}>
									<h3 className={styles.projectTitle}>{project.title}</h3>
									<p className={styles.projectDescription}>
										{project.description}
									</p>
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
