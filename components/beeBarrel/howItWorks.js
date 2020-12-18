import Image from 'next/image';
import ReactPlayer from 'react-player/youtube';

const HowItWorks = ({ imgSrc, subTitle, text, url }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:mb-14">
    <ReactPlayer url={url} />
      {/* <Image src={imgSrc} alt="how it works video" width={570} height={339} layout="fixed" /> */}
      <div className="lg:ml-16 lg:max-w-bbh">
        <h3 className="text-lg font-medium py-4 lg:font-extrabold lg:text-2xl lg:pt-0 ">{subTitle}</h3>
        <p className="pb-6 lg:text-lg">{text}</p>
      </div>
    </div>
  );
};

export default HowItWorks;
