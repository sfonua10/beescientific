const Benefits = ({ title, subtitle, text, text2, images, imagesText }) => {
  return (
    <section>
      <h3 className="text-lg font-extrabold pb-2">{title}</h3>
      <h6 className="text-light-gray text-sm font-medium pb-4">{subtitle}</h6>
      <p className="text-sm pb-6">{text}</p>
      {text2 ? <p className="text-sm pb-6">{text2}</p> : <></>}

      {images ? (
        <div className="flex space-x-4 pb-8">
          <div>
            <img className="pb-2" src={`${images[0]}`} />
            <h5 className="text-xs" style={{ maxWidth: `10rem` }}>
              {imagesText[0]}
            </h5>
          </div>
          <div>
            <img className="pb-2" src={`${images[1]}`} />
            <h5 className="text-xs" style={{ maxWidth: `10rem` }}>
              {imagesText[1]}
            </h5>
          </div>
        </div>
      ) : null}
    </section>
  );
};
export default Benefits;
