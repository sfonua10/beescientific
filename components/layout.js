import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ children }) {
  // if(document) {
  //   document?.querySelector('body').style.backgroundColor = 'lightblue'
  // }
  return (
    <div>
      <Head>
        <title>Beescientific</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="text-dark-black">{children}</main>
      <Footer />
    </div>
  );
}
