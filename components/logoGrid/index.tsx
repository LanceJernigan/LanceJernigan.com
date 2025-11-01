import Regal from "@/icons/regal";
import styles from "./logoGrid.module.css";
import Clayton from "@/icons/clayton";
import Vanderbilt from "@/icons/vanderbilt";
import ACEntertainment from "@/icons/acentertainment";
import ThePinkCactus from "@/icons/thepinkcactus";

const LogoGrid = () => (
	<section className={styles.component}>
		<div className={styles.wrapper}>
			<ul className={styles.grid}>
				<li>
					<Regal />
				</li>
				<li>
					<Clayton />
				</li>
				<li>
					<Vanderbilt />
				</li>
				<li>
					<ACEntertainment />
				</li>
				<li>
					<ThePinkCactus />
				</li>
			</ul>
		</div>
	</section>
);

export default LogoGrid;
