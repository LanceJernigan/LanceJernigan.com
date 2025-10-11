import Hero from "@/components/hero";
import styles from "./page.module.css";
import Projects from "@/components/projects";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<video
					part="video"
					muted={true}
					autoPlay={true}
					loop={true}
					poster="https://images.pexels.com/videos/7565449/pexels-photo-7565449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					src="https://videos.pexels.com/video-files/7565449/7565449-hd_1920_1080_25fps.mp4"
					preload="metadata"
				/>
				<Hero />
				<div className={styles.projects}>
					<Projects />
				</div>
			</main>
		</div>
	);
}
