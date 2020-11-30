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
      id: 0,
      imageSrc: '/images/bee_barrels_home_1.png',
      title: 'Introducing the Bee Barrel',
      subTitle: 'An exciting solution for an invaluable natural resource.',
      buttonText: 'LEARN MORE',
    },
    {
      id: 1,
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
      <section className="lg:grid grid-cols-12 h-96 py-12 my-24">
        <div className="ml-36 col-span-4 justify-self-end">
          <h2 className="font-bold mb-4 lg:headings-gray-text">
            Repopulate and Restore
          </h2>
          <p className="mb-6 max-w-xs lg:text-2xl lg:text-heading-gray lg:max-w-sm">
            Conserve an important natural resource with the award-winning Bee
            Barrel system. Watch your bee colonies grow!
          </p>
          <Button text="TAKE A LOOK" />
        </div>
        <img
          className="col-span-3 col-start-5 justify-self-end"
          src="/images/beehive_group_shapes.svg"
          alt="Picture of bee"
          // width="100%"
          // height="100%"
        />{' '}
        <img
          className="col-span-5"
          src="/images/big_bee_desktop.jpg"
          alt="Picture of bee"
          // width={`100%`}
          // height={`100%`}
          style={{
            position: `absolute`,
            right: 0,
            top: 0,
            zIndex: -1,
            width: `37%`,
          }}
        />
      </section>
      <section className="mx-12 my-24 md:grid grid-cols-3 gap-x-20 lg:mx-60 lg:my-40">
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
              <div className="justify-self-center md:col-start-2">
                <Button text="LEARN MORE" />
              </div>
            )}
          </>
        ))}
      </section>
      <section className="md:my-48 lg:mx-60 lg:mt-44">
        {data2.map((topic) => (
          <MainTopic
            key={topic.id}
            id={topic.id}
            imageSrc={topic.imageSrc}
            title={topic.title}
            subTitle={topic.subTitle}
            buttonText={topic.buttonText}
          />
        ))}
      </section>
      <section className="mx-4 mb-16 md:hidden">
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
