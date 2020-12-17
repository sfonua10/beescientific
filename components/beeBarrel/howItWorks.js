import Image from 'next/image';
import ReactPlayer from 'react-player/youtube';

const HowItWorks = ({ imgSrc, subTitle, text }) => {
  return (
    <div className="flex flex-col lg:flex-row">
        <div
          className="flex justify-center mt-8 relative"
          style={{ paddingTop: `56.25%` }}
        >
          <ReactPlayer
            style={{ position: `absolute`, top: 0, left: 0 }}
            url="https://www.youtube.com/watch?v=4FKwSIw-rSc"
            width="100%"
            height="100%"
            light={imgSrc}
            playing={true}
          />
        </div>
      {/* <Image src={imgSrc} alt="how it works video" width={359} height={215} layout="fixed" /> */}
      <div className="lg:ml-16 lg:max-w-bbh">
        <h3 className="text-lg font-medium py-4 lg:font-extrabold lg:pt-0">{subTitle}</h3>
        <p className="pb-6 lg:text-lg">{text}</p>
      </div>
    </div>
  );
};

export default HowItWorks;
