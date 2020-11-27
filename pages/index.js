import Head from 'next/head';
import Layout from '../components/layout';
import FeatureBox from '../components/featureBox';
import MainTopic from '../components/mainTopics';
import Button from '../components/button';

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
      id: 0,
      src: '/images/leaf_vector.svg',
      title: 'Environmentaly Friendly',
      text:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.',
    },
    {
      id: 1,
      src: '/images/tool_vector.svg',
      title: 'Durable Construction',
      text:
        'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id.',
    },
    {
      id: 2,
      src: '/images/clipboard_vector.svg',
      title: 'Promotes Productivity',
      text:
        'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.',
    },
  ];

  const data2 = [
    {
      imageSrc: '/images/bee_barrels_home_1.png',
      title: 'Introducing the Bee Barrel',
      subTitle: 'An exciting solution for an invaluable natural resource.',
      buttonText: 'LEARN MORE',
    },
    {
      imageSrc: '/images/bee_home_2.png',
      title: 'Contribute',
      subTitle: 'An exciting solution for an invaluable natural resource.',
      buttonText: 'JOIN US',
    },
  ];

  const socialIcons = [
    <FaFacebookF />,
    <FaTwitter />,
    <FaPinterestP />,
    <FaYoutube />,
    <FaInstagram />,
  ];
  return (
    <Layout>
      <div className="grid grid-cols-2 mx-12">
        <img
          className="self-center"
          src="/images/beehive_group_shapes.svg"
          alt="Picture of bee"
        />{' '}
        <img
          className=""
          src="/images/hero_bee.svg"
          alt="Picture of bee"
          width={351}
          height={349}
        />
      </div>
      <section className="mx-12">
        <h2 className="font-bold mb-4">Repopulate and Restore</h2>
        <p className="mb-6">
          Conserve an important natural resource with the award-winning Bee
          Barrel system. Watch your bee colonies grow!
        </p>
        <Button text="TAKE A LOOK" />
      </section>
      <section className="mx-12">
        <div className="my-24">
          {data.map((info) => (
            <>
              <FeatureBox
                key={info.id}
                id={info.id}
                vector={info.src}
                title={info.title}
                text={info.text}
              />
              {info.id === 2 && (
                <div style={{ margin: `0 auto`, width: `50%` }}>
                  <Button text="LEARN MORE" />
                </div>
              )}
            </>
          ))}
        </div>
      </section>

      {data2.map((topic, index) => (
        <MainTopic
          key={index}
          imageSrc={topic.imageSrc}
          title={topic.title}
          subTitle={topic.subTitle}
          buttonText={topic.buttonText}
        />
      ))}
      <section className="mx-4 mb-16">
        <h3 className="text-lg">CONNECT WITH US</h3>
        <div className="flex">
          {socialIcons.map((icon) => (
            <a className="mr-6">{icon}</a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
