import Button from './button';
import Image from 'next/image';

const MainTopic = ({ imageSrc, title, subTitle, buttonText, id }) => {
  return (
    <div className="md:grid grid-cols-2">
      <div className={`mx-4 mb-7 ${id === 1 && 'order-1'}`}>
        <Image
          src={imageSrc}
          width={343}
          height={330}
          layout="responsive"
          loading="lazy"
        />
      </div>
      <div className="mx-12 mb-20 self-center">
        <h3 className="mb-6 font-bold">{title}</h3>
        <p className="mb-6">{subTitle}</p>
        <Button text={buttonText} />
      </div>
    </div>
  );
};

export default MainTopic;
