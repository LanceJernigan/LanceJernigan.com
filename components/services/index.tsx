import styles from "./services.module.css";

const Services = () => {
	return (
		<section className={styles.component}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h2>What I Do</h2>
					<p>
						I work with teams at different stages of the product lifecycle, from
						early concepts to established platforms. Whether starting from net
						zero or iterating on an existing system, I help teams make
						thoughtful product decisions and ship software that can grow over
						time.
					</p>
				</div>
				<ul className={styles.services}>
					<li>
						<h6>Product & UX</h6>
						<p>
							Helping teams translate product goals and user needs into clear
							flows, wireframes, and interfaces. I focus on usability,
							accessibility, and aligning design decisions with real product
							constraints.
						</p>
					</li>
					<li>
						<h6>Engineering & Architecture</h6>
						<p>
							Designing and building modern web applications with an emphasis on
							performance, scalability, and maintainability. I care deeply about
							systems that are easy to extend, not just quick to ship.
						</p>
					</li>
					<li>
						<h6>Product Strategy</h6>
						<p>
							Partnering with founders, PMs, and teams to define scope,
							prioritize features, and make informed tradeoffs. I help bring
							structure to ambiguity and momentum to stalled ideas.
						</p>
					</li>
					<li>
						<h6>Analytics & Insight</h6>
						<p>
							Implementing analytics and event tracking to understand how
							products are actually used. This data helps teams validate
							decisions, identify opportunities, and guide future iterations.
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Services;
