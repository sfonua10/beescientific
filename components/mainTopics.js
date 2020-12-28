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
      <div className="mx-12 self-center md:mx-0 md:self-center">
        {id === 1 ? (
          <>
            <div className="float-right">
              <svg
                className="hidden md:inline-block w-32 h-32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)" stroke-width="1.914">
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
            <svg
              className="invisible w-32 h-32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)" stroke-width="1.914">
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
          </>
        ) : (
          ''
        )}
        <h3 className="mb-6 text-lg font-bold md:text-2xl md:text-center lg:text-4xl">
          {title}
        </h3>
        <div className="md:ml-10 md:max-w-hp lg:max-w-none">
          <p className="text-sm mb-6 md:text-lg lg:text-2xl">{subTitle}</p>
        </div>
        <div className="md:ml-10">
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
                stroke-width="1.914"
              />
              <path
                d="M.957 82.725l30.168-16.638 31.702 16.65v28.531L31.125 127.7.957 111.281V82.725z"
                stroke="#828BAD"
                stroke-width="1.914"
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
