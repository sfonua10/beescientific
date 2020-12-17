import Image from 'next/image';

const HowItWorks = ({ imgSrc, subTitle, text }) => {
  return (
    <>
      <Image src={imgSrc} alt="how it works video" width={359} height={215} />
      <h3 className="text-lg font-medium py-4">{subTitle}</h3>
      <p className="pb-6">{text}</p>
    </>
  );
};

export default HowItWorks;
