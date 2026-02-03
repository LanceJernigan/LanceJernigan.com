import Image from "next/image";
import styles from "./featurette.module.css";

const Featurette = () => (
	<section className={styles.component}>
		<div className={styles.wrapper}>
			<div className={styles.image}>
				<Image
					src="/assets/images/featurette-image.jpg"
					alt="Featurette Image"
					width={600}
					height={400}
				/>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>About Me</h2>
				<div className={styles.description}>
					<p>
						I’m a product engineer with experience spanning design, UX,
						engineering, product strategy, and analytics. I enjoy working with
						teams to turn ambiguous ideas into clear, usable products and
						helping existing systems evolve thoughtfully over time.
					</p>
					<p>
						My background allows me to move fluidly between disciplines, which
						helps teams ship with confidence and learn from real user behavior
						instead of assumptions.
					</p>
				</div>
			</div>
		</div>
	</section>
);

export default Featurette;
