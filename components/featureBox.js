import Image from 'next/image';

const FeatureBox = ({ vector, title, text, id }) => {
  return (
    <div className="flex flex-col items-center md:items-start md:min-w-xs-0">
      <div className="mb-2 justify-self-center md:self-center">
        <Image src={vector} width={40} height={40} />
      </div>
      <h1 className="mb-4 font-bold text-lg items-start lg:self-center lg:text-2xl">{title}</h1>
      <p className={`${id === 2 ? 'mb-6' : 'mb-14'} text-sm lg:text-lg`}>{text}</p>
    </div>
  );
};

export default FeatureBox;
