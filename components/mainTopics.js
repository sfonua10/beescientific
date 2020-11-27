import Button from './button';

const MainTopic = ({ imageSrc, title, subTitle, buttonText }) => {
  return (
    <section>
      <img className="mx-4 mb-7" src={imageSrc} />
      <div className="mx-12 mb-20">
        <h3 className="mb-6 font-bold">{title}</h3>
        <p className="mb-6">{subTitle}</p>
        <Button text={buttonText} />
      </div>
    </section>
  );
};

export default MainTopic;
