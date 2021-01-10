import Layout from '../components/layout';
import Benefits from '../components/beeBarrel/benefits';
import Button from '../components/button';

const Investor = () => {
  return (
    <Layout>
      <div className="mx-4 mt-6 md:mx-28 lg:mt-20 lg:mx-auto max-w-4xl">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="images/investor/bees.png"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="images/investor/bees-tab.png"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="images/investor/bees-desk.png"
          />
          <img
            src="images/investor/bees.png"
            className="mb-6 lg:h-desk lg:object-cover lg:object-center lg:w-full"
            alt="Busy bees buzzing around"
          />
        </picture>{' '}
        <Benefits
          title="Become an Investor"
          text="The Bee Barrel is a new beehive designed to improve the environment for the bees and the performance for the beekeeper. We believe the Bee Barrell will revolutionize beekeeping, from the backyard hobbyist to migratory pollinators and commercial honey producers. We hope to reach people who maintain one or more hives and those who operate many more. The Bee Barrel has been prototyped, tested, and patented, and is now ready for manufacture. "
          text2="We hope to reach wide audiences through social media and online stores. Due to the unique nature of the Bee Barrel, we also intend to sell hives through distribution to big box stores, and eventually on a global market as well. "
          text3="We’re also expanding our product offerings, with services and accessories. These will include stands, extractors, and equipment. We plan to offer sensors and other devices for advanced monitoring, barrel maintenance, apiary management, and risk assessment."
          text4="We are currently looking for the right investors for this innovative and unique beehive system. We’re seeking single/first round seed funding for pre-production expenses. If you reside or operate in the United States and are passionate about saving honey bees, we would love to hear from you!"
        />
        <h3 className="text-lg font-extrabold mt-4 pb-2 md:text-2xl">
          Contact Us
        </h3>
        <form action="" className="flex flex-col">
          <div className="flex flex-col mb-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="box-border rounded-sm border-dark-black border-1 h-8"
            />
          </div>
          <div className="flex flex-col mb-5">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="rounded-sm border-dark-black border-1 h-8"
            />
          </div>
          <div className="flex flex-col mb-5">
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              className="rounded-sm border-dark-black border-1 h-8"
            />
          </div>
          <div className="flex flex-col mb-5">
            <textarea
              type="message"
              name="message"
              id="message"
              placeholder="Message"
              rows="10"
              className="rounded-sm border-dark-black border-1"
            />
          </div>
          <div className="self-center mb-12 lg:self-end">
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Investor;
