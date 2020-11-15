import Head from 'next/head';
import Link from 'next/link';
// import styles from '../styles/Home.module.css';
import Header from '../components/header';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Beescientific</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
}
