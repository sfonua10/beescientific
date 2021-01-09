import Button from './button';
import Image from 'next/image';

const MainTopic = ({ imageSrc, title, subTitle, buttonText, id }) => {
  return (
    <div className="grid grid-cols-1 items-center md:grid md:grid-cols-2">
      <div className={`mx-auto mb-7 ${id === 1 ? 'md:order-1' : 'order-none xl:mx-0 xl:justify-self-end'}`}>
        <Image
          src={imageSrc}
          srcSet="/images/bee-barrels.png 343w, /images/bee-barrels-tab.png 350w, /images/bee-barrels-desk.png 471w"
          sizes="(max-width: 350px) 343px, 50vw"
          width={343}
          height={330}
          layout="intrinsic"
          loading="lazy"
        />
      </div>
      <div className="mx-auto self-center px-10 md:px-0 md:mx-0 md:self-center">
        {id === 1 ? (
          <>
            <div className="float-right">
              <svg
                className="hidden md:inline-block w-32 h-32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)" strokeWidth="1.914">
                  <path
                    d="M55.173 68.114l30.168-16.638 31.702 16.65v28.531L85.341 113.09 55.173 96.67V68.115z"
                    stroke="#828BAD"
                  />
                  <path
                    d="M.957 24.931L44.193 1.087l45.423 23.858v41L44.193 89.49.957 65.959V24.93z"
                    stroke="#2E3E77"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <path fill="#fff" d="M0 0h118v114.173H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="hidden md:block w-32 h-32"></div>
          </>
        ) : (
          ''
        )}
        <h3 className="mb-6 text-lg font-bold md:ml-6 md:text-2xl xl:text-4xl">
          {title}
        </h3>
        <div className="md:ml-6 md:max-w-hp xl:max-w-none">
          <p className="text-sm mb-6 md:text-lg xl:text-2xl">{subTitle}</p>
        </div>
        <div className="md:ml-6 mb-16">
          <Button text={buttonText} />
          {id === 0 ? (
            <svg
              className="hidden md:block w-32 h-32 float-right"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.957 24.931L44.193 1.087l45.423 23.858v41L44.193 89.49.957 65.959V24.93z"
                stroke="#2E3E77"
                strokeWidth="1.914"
              />
              <path
                d="M.957 82.725l30.168-16.638 31.702 16.65v28.531L31.125 127.7.957 111.281V82.725z"
                stroke="#828BAD"
                strokeWidth="1.914"
              />
            </svg>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default MainTopic;
