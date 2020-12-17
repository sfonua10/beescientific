import Image from 'next/image';

const Benefits = ({ title, subtitle, text, text2, images, imagesText }) => {
  return (
    <section>
      <h3 className="text-lg font-extrabold pb-2 md:text-2xl">{title}</h3>
      <h6 className="text-light-gray text-sm font-medium pb-4 md:text-lg">
        {subtitle}
      </h6>
      <p className="text-sm pb-6">{text}</p>
      {text2 ? <p className="text-sm pb-6">{text2}</p> : <></>}

      {images ? (
        <div className="flex space-x-4 pb-8">
          <div>
          <picture>
            <source media="(max-width: 640px)" srcSet="images/beeBarrel/bees-drawing-comb-174w.jpg" />
            <source media="(max-width: 1024px)" srcSet="images/beeBarrel/bees-drawing-comb-257w.jpg" />
            <source media="(min-width: 1024px)" srcSet="images/beeBarrel/bees-drawing-comb-441w.png" />
            <img src="images/beeBarrel/bees-drawing-comb-174w.jpg" alt="Chris standing up holding his daughter Elva" />
          </picture>
            <h5 className="text-xs" style={{ maxWidth: `10rem` }}>
              {imagesText[0]}
            </h5>
          </div>
          <div>
          <picture>
            <source media="(max-width: 640px)" srcSet="images/beeBarrel/hive-unique-161w.jpg" />
            <source media="(max-width: 1024px)" srcSet="images/beeBarrel/hive-unique-258w.png" />
            <source media="(min-width: 1024px)" srcSet="images/beeBarrel/hive-unique-441w.png" />
            <img src="images/beeBarrel/hive-unique-161w.jpg" alt="Chris standing up holding his daughter Elva" />
          </picture>
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
