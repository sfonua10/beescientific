import Image from 'next/image';
import ReactPlayer from 'react-player/youtube';

const HowItWorks = ({ imgSrc, subTitle, text, url }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:mb-14">
      <div
        className="flex justify-center mt-8 relative lg:mt-16 lg:hidden"
        style={{ paddingTop: `56.25%` }}
      >
        <ReactPlayer
          style={{ position: `absolute`, top: 0, left: 0 }}
          url="https://www.youtube.com/watch?v=4FKwSIw-rSc"
          width="100%"
          height="100%"
          light="images/beeBarrel/bee_barrel_thumbnail.png"
          playing={true}
        />
      </div>
      <div className="hidden lg:contents">
        <ReactPlayer url={url} />
      </div>
      {/* <Image src={imgSrc} alt="how it works video" width={570} height={339} layout="fixed" /> */}
      <div className="lg:ml-16 lg:max-w-bbh">
        <h3 className="text-lg font-medium py-4 lg:font-extrabold lg:text-2xl lg:pt-0 ">
          {subTitle}
        </h3>
        <p className="pb-6 lg:text-lg">{text}</p>
      </div>
    </div>
  );
};

export default HowItWorks;
