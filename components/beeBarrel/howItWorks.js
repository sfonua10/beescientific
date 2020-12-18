import Image from 'next/image';
import ReactPlayer from 'react-player/youtube';

const HowItWorks = ({ imgSrc, subTitle, text }) => {
  return (
    <div className="flex flex-col lg:flex-row">
    <video width="620" controls
      poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg" >
      <source
        src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
        type="video/mp4" />
      <source
        src="https://archive.org/download/ElephantsDream/ed_hd.ogv"
        type="video/ogg" />
      <source
        src="https://archive.org/download/ElephantsDream/ed_hd.avi"
        type="video/avi" />
      Your browser doesn't support HTML5 video tag.
    </video>
      {/* <Image src={imgSrc} alt="how it works video" width={570} height={339} layout="fixed" /> */}
      <div className="lg:ml-16 lg:max-w-bbh">
        <h3 className="text-lg font-medium py-4 lg:font-extrabold lg:pt-0">{subTitle}</h3>
        <p className="pb-6 lg:text-lg">{text}</p>
      </div>
    </div>
  );
};

export default HowItWorks;
