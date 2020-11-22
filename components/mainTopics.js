const MainTopic = ({ imageSrc, title, subTitle, buttonText }) => {
  return (
    <section>
      <img src={imageSrc} />
      <h3 style={{ marginBottom: 22 }}>{title}</h3>
      <p style={{ marginBottom: 24 }}>{subTitle}</p>
      <button style={{ marginBottom: 74 }} className="button">
        {buttonText}
      </button>
    </section>
  );
};

export default MainTopic;
