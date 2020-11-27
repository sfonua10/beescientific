const FeatureBox = ({ vector, title, text, id }) => {
  return (
    <div>
      <img className="mb-2" src={vector} width={40} height={40} />
      <div className="mb-4 font-bold">{title}</div>
      <p className={`${id === 2 ? 'mb-6' : 'mb-14'}`}>{text}</p>
    </div>
  );
};

export default FeatureBox;
