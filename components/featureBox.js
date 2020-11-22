const FeatureBox = ({ vector, title, text }) => {
  return (
    <div style={{ maxWidth: 275, marginBottom: 56 }}>
      <img src={vector} width={40} height={40} />
      <div
        style={{
          fontFamily: 'Avenir',
          fontWeight: 800,
          fontSize: `18px`,
          lineHeight: `32.78px`,
          marginBottom: `16px`,
        }}
      >
        {title}
      </div>
      <p>{text}</p>
    </div>
  );
};

export default FeatureBox;
