import Button from './button';
import Image from 'next/image';

const MainTopic = ({ imageSrc, title, subTitle, buttonText, id }) => {
  return (
    <div className="flex flex-col items-center md:grid md:grid-cols-2">
      <div className={`mx-4 mb-7 ${id === 1 ? 'md:order-1' : 'order-none'}`}>
        <Image
          src={imageSrc}
          width={343}
          height={330}
          layout="fixed"
          loading="lazy"
        />
      </div>
      <div className="mx-12 mb-20 self-center md:mx-0 md:self-start">
        {id === 1 ? (
          <svg
            className="hidden md:block ml-32"
            width="185"
            height="179"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M86.5 106.788l47.298-26.085L183.5 106.81v44.73l-49.703 25.763L86.5 151.56v-44.772z"
              stroke="#828BAD"
              strokeWidth="3"
            />
            <path
              d="M1.5 39.087L69.286 1.703 140.5 39.108v64.281l-71.215 36.913L1.5 103.409V39.087z"
              stroke="#2E3E77"
              strokeWidth="3"
            />
          </svg>
        ) : (
          ''
        )}
        <h3 className="mb-6 font-bold md:text-2xl md:text-center">{title}</h3>
        <div className="md:ml-10 md:max-w-hp">
          <p className="mb-6">{subTitle}</p>
          <span>
            <Button text={buttonText} />
            {id === 0 ? (
              <svg
                // width="142"
                // height="207"
                className="hidden md:block w-36 h-52 float-right"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 134.788l47.298-26.085L98.5 134.809v44.73l-49.703 25.763L1.5 179.56v-44.772z"
                  stroke="#828BAD"
                  strokeWidth="3"
                />
                <path
                  d="M1.5 39.087L69.286 1.703 140.5 39.108v64.281l-71.215 36.913L1.5 103.409V39.087z"
                  stroke="#2E3E77"
                  strokeWidth="3"
                />
              </svg>
            ) : (
              ''
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainTopic;
