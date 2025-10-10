import styles from "./hero.module.css";
import X from "@/icons/x";
import LinkedIn from "@/icons/linkedIn";
import GitHub from "@/icons/github";
import Dribbble from "@/icons/dribbble";

export default function Hero() {
	return (
		<section className={styles.hero}>
			<video
				part="video"
				muted={true}
				autoPlay={true}
				loop={true}
				poster="https://images.pexels.com/videos/7565449/pexels-photo-7565449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				src="https://videos.pexels.com/video-files/7565449/7565449-hd_1920_1080_25fps.mp4"
				preload="metadata"
			/>
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
