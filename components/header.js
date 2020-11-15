import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <header className={styles.mainHeader}>
      <a className={styles.brandLogo}>
        <img src="/images/favicon.ico" />
        <div className={styles.brandLogoName}>Beescientific</div>
      </a>
      <nav className={styles.mainNav}>
        <ul>
          <li>
            <a>Home</a>
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
