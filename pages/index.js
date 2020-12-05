import Head from 'next/head';
import Layout from '../components/layout';
import FeatureBox from '../components/featureBox';
import MainTopic from '../components/mainTopics';
import Button from '../components/button';
import styled from 'styled-components';
import Image from 'next/image';
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

// const HeroImageWrapper = styled.div`
//   position: absolute;
//   top: 20px;
//   right: 0;
//   z-index: -1;

//   @media (min-width: 768px) {
//     top: -4rem;
//     width: 36rem;
//   }

//   @media (min-width: 1024px) {
//     top: -4rem;
//     width: 47rem;
//   }
// `;
export default function Home() {
  const data = [
    {
      id: 0,
      src: '/images/thermometer-half-solid.svg',
      title: 'Client Management',
      text: 'Bee Barrels provide insulation and stable hive temperatures.',
    },
    {
      id: 1,
      src: '/images/tool_vector.svg',
      title: 'Durable Construction',
      text:
        'Bee Barrels eliminate hive damage and minimize stress to your bees.',
    },
    {
      id: 2,
      src: '/images/clipboard_vector.svg',
      title: 'Promotes Productivity',
      text:
        'Bee Barrels promote productivity, yielding better results from colonies.',
    },
  ];

  const data2 = [
    {
      id: 0,
      imageSrc: '/images/bee_barrels_home_1.png',
      title: 'Introducing the Bee Barrel',
      subTitle: 'An exciting solution for an invaluable natural resource.',
      buttonText: 'SEE MORE',
    },
    {
      id: 1,
      imageSrc: '/images/bee_home_2.png',
      title: 'Contribute or Invest',
      subTitle: 'Learn more about our business and become part of the team!',
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

  let heroImageWidth = 15;
  //23
  return (
    <Layout>
      <div className=" h-96 grid grid-cols-12 grid-rows-6 md:mt-16">
        <section className="hidden mx-12 md:mx-28 lg:block lg:col-start-2 lg:col-span-4 lg:mx-0 lg:row-start-2">
          <h2 className="font-bold mb-4 md:text-2xl">Repopulate and Restore</h2>
          <p className="mb-6 max-w-xs md:text-lg">
            Conserve an important natural resource with the award-winning Bee
            Barrel system. Watch your bee colonies grow!
          </p>
          <Button text="TAKE A LOOK" />
        </section>
        <svg
          className="h-32 w-32 md:w-64 h-72 z-10 self-center justify-self-center row-start-3 col-start-4 md:col-start-5 md:col lg:col-start-6"
          viewBox="0 0 281 294"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5 125.691L120.578 72.7034L221.5 125.712V216.991L120.578 269.302L24.5 217.011V125.691Z"
            stroke="#2E3E77"
            strokeOpacity="0.77"
            strokeWidth="3"
          />
          <path
            d="M1.5 221.788L48.7978 195.703L98.5 221.809V266.539L48.7975 292.302L1.5 266.56V221.788Z"
            stroke="#2E3E77"
            strokeOpacity="0.47"
            strokeWidth="3"
          />
          <path
            d="M182.5 106.788L229.798 80.7034L279.5 106.809V151.539L229.797 177.302L182.5 151.56V106.788Z"
            stroke="#2E3E77"
            strokeOpacity="0.47"
            strokeWidth="3"
          />
          <path
            d="M90.5 39.0875L158.286 1.70343L229.5 39.1082V103.389L158.285 140.302L90.5 103.409V39.0875Z"
            stroke="#2E3E77"
            strokeOpacity="0.47"
            strokeWidth="3"
          />
        </svg>
        {/* Mobile Image */}
        <div className="absolute top-7 right-0 -z-10 md:hidden">
          <Image
            src="/images/mobile_hero_bee.svg"
            alt="Picture of bee"
            width={250}
            height={370}
            layout="intrinsic"
          />
        </div>

        {/* Tablet Image */}
        <div className="hidden absolute -top-7 right-0 -z-10 md:block">
          <Image
            src="/images/mobile_hero_bee.svg"
            alt="Picture of bee"
            width={450}
            height={550}
            layout="intrinsic"
          />
        </div>

        {/* Large 1024px */}
        <div className="hidden absolute -top-7 -right-10 -z-10 lg:block">
          <Image
            src="/images/mobile_hero_bee.svg"
            alt="Picture of bee"
            width={800}
            height={700}
            layout="intrinsic"
          />
        </div>
      </div>
      <section className="mx-12 md:mx-28 lg:hidden">
        <h2 className="font-bold mb-4 md:text-2xl">Repopulate and Restore</h2>
        <p className="mb-6 max-w-xs md:text-lg">
          Conserve an important natural resource with the award-winning Bee
          Barrel system. Watch your bee colonies grow!
        </p>
        <Button text="TAKE A LOOK" />
      </section>
      <section className="mx-12 my-24 md:grid grid-cols-3 gap-x-20 md:mt-40">
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
      <section className="sm2:ml-4 md:mt-40 md:mb-20">
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
      <section className="mx-4 mb-5 md:hidden">
        <h3 className="mb-1 text-lg">CONNECT WITH US</h3>
        <div className="flex">
          {socialIcons.map((icon, index) => (
            <a className="mr-6" key={index}>
              {icon}
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
