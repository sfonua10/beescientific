import Button from './button';

const MainTopic = ({ imageSrc, title, subTitle, buttonText, id }) => {
  return (
    <div className="md:grid grid-cols-2">
      <img
        className={`mx-4 mb-7 ${id === 1 ? 'order-1' : ''}`}
        src={imageSrc}
      />
      <div className={`mx-12 mb-20 self-center ${id === 1 ? 'md:mx-28' : ''}`}>
        {id === 1 && (
          <img src="/images/hive_double_2.svg" className="hidden lg:block" />
        )}
        <h3 className="mb-6 font-bold lg:headings-gray-text">{title}</h3>
        <p className="mb-6">{subTitle}</p>
        <div className="flex">
          <Button
            text={buttonText}
            className="justify-self-center self-center"
          />
          {id === 0 && (
            <img
              src="/images/hive_double_1.svg"
              width={142}
              className="hidden lg:block"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainTopic;
