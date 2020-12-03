const FeatureBox = ({ vector, title, text, id }) => {
  return (
    <div style={{ minWidth: `10rem` }} className="grid">
      <img
        className="mb-2 justify-self-center"
        src={vector}
        width={40}
        height={40}
      />
      <h1 className="mb-4 font-bold justify-self-center">{title}</h1>
      <p className={`${id === 2 ? 'mb-6' : 'mb-14'} text-sm pl-3`}>{text}</p>
    </div>
  );
};

export default FeatureBox;
