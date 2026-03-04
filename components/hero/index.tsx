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
          <h2 className={styles.subtitle}>Product Engineer</h2>
          <p>
            I partner with teams to build scalable, user-centered web products,
            from net new ideas to iterative improvements, across design,
            engineering, and analytics.
          </p>
        </header>
        <ul className={styles.socials}>
          <li>
            <a
              href="https://www.linkedin.com/in/lancejernigan/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
            >
              <LinkedIn />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/Lance_Jernigan"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter) Profile"
            >
              <X />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/LanceJernigan/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
            >
              <GitHub />
            </a>
          </li>
          {/* <li>
						<a href="">
							<Dribbble />
						</a>
					</li> */}
        </ul>
      </div>
    </section>
  );
}
