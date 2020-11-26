import Head from 'next/head';
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
      <div className="grid grid-cols-2">
        <img
          className="self-center"
          src="/images/beehives_hero.png"
          alt="Picture of bee"
          width={124}
          height={130}
        />{' '}
        <img
          className=""
          src="/images/hero_bee.svg"
          alt="Picture of bee"
          width={351}
          height={349}
        />
      </div>
      <section>
        <h2 className="font-bold mb-4">Repopulate and Restore</h2>
        <p className="mb-6">
          Conserve an important natural resource with the award-winning Bee
          Barrel system. Watch your bee colonies grow!
        </p>
        <button className="bw-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10utton">
          TAKE A LOOK
        </button>
      </section>
      <section>
        <div>
          {data.map((info, index) => (
            <FeatureBox
              key={index}
              vector={info.src}
              title={info.title}
              text={info.text}
            />
          ))}
        </div>
        <button>LEARN MORE</button>
      </section>

      {data2.map((topic, index) => (
        <MainTopic
          key={index}
          imageSrc={topic.imageSrc}
          title={topic.title}
          subTitle={topic.subTitle}
          buttonTexT={topic.buttonText}
        />
      ))}
      <section>
        <h3> CONNECT WITH US</h3>
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
