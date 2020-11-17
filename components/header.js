import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <header className={styles.mainHeader}>
      <a className={styles.brandLogo}>
        <img src="/images/bee_scientific_logo.svg" />
      </a>
      <nav className={styles.mainNav}>
        <ul>
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>BEE BARREL</a>
          </li>
          <li>
            <a>ABOUT US</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
