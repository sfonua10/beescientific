import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import FeatureBox from '../components/featureBox';
import MainTopic from '../components/mainTopics';

import Image from 'next/image';
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

export default function Home() {
  const data = [
    {
      src: '/images/leaf_vector.svg',
      title: 'Environmentaly Friendly',
      text:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.',
    },
    {
      src: '/images/tool_vector.svg',
      title: 'Durable Construction',
      text:
        'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id.',
    },
    {
      src: '/images/clipboard_vector.svg',
      title: 'Promotes Productivity',
      text:
        'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.',
    },
  ];

  const data2 = [
    {
      imageSrc: '/images/bee_barrels_home_1.png',
      title: 'Environmentaly Friendly',
      subTitle: 'An exciting solution for an invaluable natural resource.',
      buttonText: 'LEARN MORE',
    },
    {
      imageSrc: '/images/bee_home_2.png',
      title: 'Durable Construction',
      subTitle: 'An exciting solution for an invaluable natural resource.',
      buttonText: 'JOIN US',
    },
  ];
  return (
    <Layout>
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
      <section style={{ maxWidth: `220px` }}>
        <h4>Repopulate and Restore</h4>
        <p style={{ marginBottom: `24px` }}>
          Conserve an important natural resource with the award-winning Bee
          Barrel system. Watch your bee colonies grow!
        </p>
        <button className="button">Take a look</button>
      </section>
      <section
        style={{ marginTop: 100, display: `flex`, flexDirection: `column` }}
      >
        <div className="homeGrid">
          {data.map((info) => (
            <FeatureBox vector={info.src} title={info.title} text={info.text} />
          ))}
        </div>
        <button className="button" style={{ alignSelf: `center` }}>
          LEARN MORE
        </button>
      </section>

      {data2.map((topic) => (
        <MainTopic
          imageSrc={topic.imageSrc}
          title={topic.title}
          subTitle={topic.subTitle}
          buttonTexT={topic.buttonText}
        />
      ))}
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
    </Layout>
  );
}
