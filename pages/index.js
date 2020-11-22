import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import FeatureBox from '../components/featureBox';
import Image from 'next/image';
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

export default function Home() {
  return (
    <Layout>
      {/* <div style={{ display: `flex`, margin: `10rem` }}>
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
      </section> */}

      <div className={styles.heroImages}>
        <img
          className={styles.img1}
          src="/images/beehives_hero.png"
          alt="Picture of bee"
          width={124}
          height={130}
        />{' '}
        <img
          className={styles.img2}
          src="/images/hero_bee.svg"
          alt="Picture of bee"
          width={351}
          height={349}
        />
      </div>
      <h2>Repopulate and Restore</h2>
      <p>
        Conserve an important natural resource with the award-winning Bee Barrel
        system. Watch your bee colonies grow!
      </p>
      <button className="button">Take a look</button>

      <section>
        <div className="homeGrid">
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
        </div>
        <button className="button">LEARN MORE</button>
      </section>
      <section>
        <img src="/images/bee_barrels_home_1.png" />
        <h2>Introducing the Bee Barrel</h2>
        <p>An exciting solution for an invaluable natural resource</p>
        <button className="button">LEARN MORE</button>
      </section>
      <section>
        <img src="/images/bee_home_2.png" />
        <h2>Contribute</h2>
        <p>An exciting solution for an invaluable natural resource</p>
        <button className="button">LEARN MORE</button>
      </section>
      <section>
        <h3>CONNECT WITH US</h3>
        <div>
          <FaFacebookF />
          <FaTwitter />
          <FaPinterestP />
          <FaYoutube />
          <FaInstagram />
        </div>
      </section>
      <footer style={{ background: `#959CB9` }}>
        <p>&#169; 2020 BEESCIENTIFIC, LLC</p>
        <p>ALL RIGHTS RESERVED.</p>
      </footer>
    </Layout>
  );
}
