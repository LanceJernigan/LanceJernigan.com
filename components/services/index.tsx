import styles from "./services.module.css";

const Services = () => {
	return (
		<section className={styles.component}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h2>What I Do</h2>
					<p>
						From concept to launch, I help businesses and teams create digital
						experiences that look great, perform fast, and deliver real
						insights. Whether you need a full site build, a technical audit, or
						ongoing consulting, I can help at any stage.
					</p>
				</div>
				<ul className={styles.services}>
					<li>
						<h6>Web Design & Development</h6>
						<p>
							Crafting responsive, accessible websites built on modern
							frameworks like Next.js, React, and TypeScript — tailored to your
							brand, goals, and content workflow.
						</p>
					</li>
					<li>
						<h6>CMS & Content Infrastructure</h6>
						<p>
							Implementing headless CMS solutions such as Sanity.io to give
							teams full control of their content without needing constant code
							changes.
						</p>
					</li>
					<li>
						<h6>Analytics & Growth Strategy</h6>
						<p>
							Defining Segment tracking plans, integrating marketing tools, and
							turning analytics into actionable insights that guide design and
							business decisions.
						</p>
					</li>
					<li>
						<h6>Consulting & Technical Direction</h6>
						<p>
							Helping teams bridge the gap between design and engineering — from
							building design systems to improving developer experience, SEO,
							and long-term scalability.
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Services;
