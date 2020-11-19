import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import FeatureBox from '../components/featureBox';

export default function Home() {
  return (
    <Layout>
      <div style={{ display: `flex`, margin: `10rem` }}>
        <section style={{ maxWidth: 415 }}>
          <h1>Repopulate and Restore</h1>
          <p style={{ fontSize: `24px`, lineHeight: `27.27px` }}>
            Conserve an important natural resource with the award-winning Bee
            Barrel system. Watch your bee colonies grow!
          </p>
          <button>TAKE A LOOK</button>
        </section>
        <img src="/images/beehive_graphic.svg" />
        <img
          src="/images/home_rectangle.svg"
          style={{ position: `absolute`, top: 0, right: 0, zIndex: -1 }}
        />
      </div>
      <section>
        <main style={{ maxWidth: 995, margin: `auto`, display: `flex` }}>
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
        </main>
        <button style={{ display: `block`, margin: `0 auto`, marginTop: 48 }}>
          LEARN MORE
        </button>
      </section>
    </Layout>
  );
}
