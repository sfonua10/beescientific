import BenefitsImage from './benefitsImage';

const Benefits = ({ alt, title, subtitle, text, text2, images, images2, imagesText }) => {
  return (
    <section>
      <h3 className="text-lg font-extrabold pb-2 md:text-2xl">{title}</h3>
      <h6 className="text-light-gray text-sm font-medium pb-4 md:text-lg lg:text-xl">
        {subtitle}
      </h6>
      <p className="text-sm pb-6 lg:text-lg">{text}</p>
      {text2 ? <p className="text-sm pb-6 lg:text-lg">{text2}</p> : <></>}

      {images ? (
        // <div className="flex space-x-4 pb-8 justify-center">
        <div className="grid grid-cols-2 pb-8">
          <BenefitsImage
            imageSrc={images}
            imageText={imagesText[0]}
            alt={alt[0]}
          />
          <BenefitsImage
            imageSrc={images2}
            imageText={imagesText[1]}
            alt={alt[1]}
          />
        </div>
      ) : null}
    </section>
  );
};
export default Benefits;
