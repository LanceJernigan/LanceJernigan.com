import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
    return (
        <section className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                </div>
                <button className={styles.menuIcon}>
                    <Image src="/assets/icons/menu.svg" alt="menu icon" width={40} height={20} />
                </button>
            </div>
        </section>
    )
}