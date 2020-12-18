import BenefitsImage from './benefitsImage';

const Benefits = ({ title, subtitle, text, text2, images, imagesText }) => {
  return (
    <section>
      <h3 className="text-lg font-extrabold pb-2 md:text-2xl">{title}</h3>
      <h6 className="text-light-gray text-sm font-medium pb-4 md:text-lg lg:text-xl">
        {subtitle}
      </h6>
      <p className="text-sm pb-6 lg:text-lg">{text}</p>
      {text2 ? <p className="text-sm pb-6 lg:text-lg">{text2}</p> : <></>}

      {images ? (
        <div className="flex space-x-4 pb-8 justify-center">
          <BenefitsImage
            imageSrc={[
              'images/beeBarrel/bees-drawing-comb-174w.jpg',
              'images/beeBarrel/bees-drawing-comb-257w.jpg',
              'images/beeBarrel/bees-drawing-comb-441w.png',
            ]}
            imageText="The Bee Barrel hive's unique design."
            alt="Honey bees drawing comb"
          />
          <BenefitsImage
            imageSrc={[
              'images/beeBarrel/hive-unique-161w.jpg',
              'images/beeBarrel/hive-unique-258w.png',
              'images/beeBarrel/hive-unique-441w.png',
            ]}
            imageText="The Bee Barrel hive's unique design."
            alt="Honey bees drawing comb"
          />
        </div>
      ) : null}
    </section>
  );
};
export default Benefits;
