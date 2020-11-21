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
          {/* <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/beeBarrel">
              <a>BEE BARREL</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>ABOUT US</a>
            </Link>
          </li> */}
          {/* <li>
            <Link href="/contribute">
              <a>CONTRIBUTE</a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
