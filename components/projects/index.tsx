"use client";
import Image from "next/image";
import styles from "./projects.module.css";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
	const [currentProject, setCurrentProject] = useState(2);
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
			behavior: "smooth",
		});
	}, [currentProject]);

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
					<li
						className={styles.item}
						data-active={currentProject === 0 ? "true" : "false"}
						onClick={() => setCurrentProject(0)}
					>
						<article className={styles.project}>
							<div className={styles.imageWrapper}>
								<Image
									src="/assets/images/project1.jpg"
									alt="Project 1"
									width={700}
									height={467}
								/>
							</div>
							<div className={styles.content}>
								<h3 className={styles.projectTitle}>The Pink Cactus</h3>
								<p className={styles.projectDescription}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
									at lacus at risus molestie consectetur. Mauris dapibus luctus
									tortor in aliquam. Duis eget tempus lectus, sed scelerisque
									arcu.
								</p>
							</div>
						</article>
					</li>
					<li
						className={styles.item}
						data-active={currentProject === 1 ? "true" : "false"}
						onClick={() => setCurrentProject(1)}
					>
						<article className={styles.project}>
							<div className={styles.imageWrapper}>
								<Image
									src="/assets/images/project1.jpg"
									alt="Project 1"
									width={700}
									height={467}
								/>
							</div>
							<div className={styles.content}>
								<h3 className={styles.projectTitle}>The Pink Cactus</h3>
								<p className={styles.projectDescription}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
									at lacus at risus molestie consectetur. Mauris dapibus luctus
									tortor in aliquam. Duis eget tempus lectus, sed scelerisque
									arcu.
								</p>
							</div>
						</article>
					</li>
					<li
						className={styles.item}
						data-active={currentProject === 2 ? "true" : "false"}
						onClick={() => setCurrentProject(2)}
					>
						<article className={styles.project}>
							<div className={styles.imageWrapper}>
								<Image
									src="/assets/images/project1.jpg"
									alt="Project 1"
									width={700}
									height={467}
								/>
							</div>
							<div className={styles.content}>
								<h3 className={styles.projectTitle}>The Pink Cactus</h3>
								<p className={styles.projectDescription}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
									at lacus at risus molestie consectetur. Mauris dapibus luctus
									tortor in aliquam. Duis eget tempus lectus, sed scelerisque
									arcu.
								</p>
							</div>
						</article>
					</li>
					<li
						className={styles.item}
						data-active={currentProject === 3 ? "true" : "false"}
						onClick={() => setCurrentProject(3)}
					>
						<article className={styles.project}>
							<div className={styles.imageWrapper}>
								<Image
									src="/assets/images/project1.jpg"
									alt="Project 1"
									width={700}
									height={467}
								/>
							</div>
							<div className={styles.content}>
								<h3 className={styles.projectTitle}>The Pink Cactus</h3>
								<p className={styles.projectDescription}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
									at lacus at risus molestie consectetur. Mauris dapibus luctus
									tortor in aliquam. Duis eget tempus lectus, sed scelerisque
									arcu.
								</p>
							</div>
						</article>
					</li>
					<li
						className={styles.item}
						data-active={currentProject === 4 ? "true" : "false"}
						onClick={() => setCurrentProject(4)}
					>
						<article className={styles.project}>
							<div className={styles.imageWrapper}>
								<Image
									src="/assets/images/project1.jpg"
									alt="Project 1"
									width={700}
									height={467}
								/>
							</div>
							<div className={styles.content}>
								<h3 className={styles.projectTitle}>The Pink Cactus</h3>
								<p className={styles.projectDescription}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
									at lacus at risus molestie consectetur. Mauris dapibus luctus
									tortor in aliquam. Duis eget tempus lectus, sed scelerisque
									arcu.
								</p>
							</div>
						</article>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Projects;
