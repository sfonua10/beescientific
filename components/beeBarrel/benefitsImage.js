const BenefitsImage = ({imageSrc, imageText, alt}) => {
  return (
    // <div className="max-w-bb-image-label md:max-w-0">
    <div>
      <picture>
        <source
          media="(max-width: 640px)"
          srcSet={imageSrc[0]}
        />
        <source
          media="(max-width: 1024px)"
          srcSet={imageSrc[1]}
        />
        <source
          media="(min-width: 1024px)"
          srcSet={imageSrc[2]}
        />
        <img
          src={imageSrc[0]}
          alt={alt}
        />
      </picture>
      <h5 className="text-xs max-w-1/4 lg:text-sm mt-2 lg:mt-2.5">{imageText}</h5>
    </div>
  );
};

export default BenefitsImage;
