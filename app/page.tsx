import Hero from "@/components/hero";
import styles from "./page.module.css";
import Projects from "@/components/projects";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Hero />
				<Projects />
			</main>
		</div>
	);
}
