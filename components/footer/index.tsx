import LinkedIn from "@/icons/linkedIn";
import styles from "./component.module.css";
import X from "@/icons/x";
import GitHub from "@/icons/github";
import Dribbble from "@/icons/dribbble";

const Footer = () => (
	<footer className={styles.component}>
		<div className={styles.wrapper}>
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
			<p className={styles.copy}>© {new Date().getFullYear()} Lance Jernigan</p>
		</div>
	</footer>
);

export default Footer;
