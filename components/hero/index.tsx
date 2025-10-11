import styles from "./hero.module.css";
import X from "@/icons/x";
import LinkedIn from "@/icons/linkedIn";
import GitHub from "@/icons/github";
import Dribbble from "@/icons/dribbble";

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.wrapper}>
				<header className={styles.header}>
					<h1 className={styles.title}>Lance Jernigan</h1>
					<h2 className={styles.subtitle}>Software Engineer</h2>
				</header>
				<ul className={styles.socials}>
					<li>
						<a
							href="https://www.linkedin.com/in/lancejernigan/"
							target="_blank"
							rel="noreferrer"
						>
							<LinkedIn />
						</a>
					</li>
					<li>
						<a
							href="https://x.com/Lance_Jernigan"
							target="_blank"
							rel="noreferrer"
						>
							<X />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/LanceJernigan/"
							target="_blank"
							rel="noreferrer"
						>
							<GitHub />
						</a>
					</li>
					<li>
						<a href="">
							<Dribbble />
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}
