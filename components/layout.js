import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Beescientific</title>
        <link rel="icon" href="images/favicon.png" />
        <meta property="og:image" content="images/bee-scientific-cody-adams" />
      </Head>
      <Header />
      <main className="text-dark-black">{children}</main>
      <Footer />
    </div>
  );
}
