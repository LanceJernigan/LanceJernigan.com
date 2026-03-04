import Hero from "@/components/hero";
import styles from "./page.module.css";
import Projects from "@/components/projects";
import Services from "@/components/services";
import LogoGrid from "@/components/logoGrid";
import Featurette from "@/components/featurette";
import ContactForm from "@/components/contactForm";
import ScrollReveal from "@/components/scrollReveal";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <video
          part="video"
          muted={true}
          autoPlay={true}
          loop={true}
          poster="/assets/images/hero-poster.jpeg"
          src="/assets/videos/hero-video.mp4"
          preload="metadata"
        />
        <Hero />
        <div className={styles.content}>
          <Projects />
          <ScrollReveal>
            <Services />
          </ScrollReveal>
          <ScrollReveal>
            <LogoGrid />
          </ScrollReveal>
          <ScrollReveal>
            <Featurette />
          </ScrollReveal>
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
}
