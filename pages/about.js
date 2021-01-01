import Layout from '../components/layout';
import Benefits from '../components/beeBarrel/benefits';
import BenefitsImage from '../components/beeBarrel/benefitsImage';
import ReactPlayer from 'react-player/youtube';
import ViewMore from '../components/viewMore';
import SocialIcons from '../components/socialIcons';

const About = () => {
  return (
    <Layout>
      <div className="mx-4 mt-6 md:mx-28 lg:mx-auto max-w-4xl">
        <picture>
          <source media="(max-width: 640px)" srcSet="images/about/img-1.png" />
          <source
            media="(max-width: 1024px)"
            srcSet="images/about/img-1-tab.png"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="images/about/img-1-desk.png"
          />
          <img
          src="images/about/img-1.png"
          alt="hi"
          />
        </picture>
        <section className="md:flex md:flex-col md:gap-x-5 md:mb-12">
            <h1 className="text-2xl	text-dark-black font-black pt-8 pb-4 lg:text-4xl">
              About Us
            </h1>
            <p className="text-sm pb-6 md:pb-0 lg:text-lg">
              BeeScientific was created in 2012, with the mission to perfect the
              beekeeping experience while protecting an important natural
              resource.
            </p>
          <div className="flex flex-col text-white bg-blue-gray md:self-center md:min-w-1/2 mx-auto md:mx-0 md:px-6 md:py-10 md:mt-6 lg:px-12 lg:py-12">
            <h1 className="text-2xl font-extrabold pt-10 text-center pb-4 md:text-base md:pb-6 md:pt-0 lg:text-2xl">
              OUR MISSION
            </h1>
            <ol
              className="px-16 pb-10 text-sm md:px-0 md:pb-0 lg:text-lg"
              style={{ minWidth: `205`, alignSelf: `center` }}
            >
              <p>
                To perfect the beekeeping experience by protecting our bees,
                preserving our art, improving our techniques, and broadening our
                understanding.
              </p>
            </ol>
          </div>
        </section>
        <section className="my-8">
          <Benefits
            title="Our Story"
            text="One fall weekend while living in California, I extracted over 300 pounds of honey from two backyard beehives. The process was laborious and difficult, and I thought there must be simpler alternative methods that could make harvesting honey easier and more efficient."
            text2="Beekeeping is a centuries-old custom and an art form, but I uncovered many opportunities for improvement to current trends with modern technological advances. The population of bees is being threatened all over the world. Beekeepers have lost entire colonies due to disease, mite infestation, and drought. Honey production has been in decline for many years. By improving the beekeeper’s experience, I also hoped to improve bee conditions and productivity to boost and replenish bee populations. "
            images={[
              'images/about/img-2.png',
              'images/about/img-2-tab.png',
              'images/about/img-2-desk.png',
            ]}
            images2={[
              'images/about/img-3.png',
              'images/about/img-3-tab.png',
              'images/about/img-3-desk.png',
            ]}
            imagesText={[
              'Early concept blue print of the bee gate, which can be adjusted to the desired size.',
              'First wooden prototype being reviewed and inspected.',
            ]}
            alt={['Honey bees drawing comb', 'Unique Bee Barrel hive design']}
          />
          <p>
            I began by sketching concepts and built four wooden prototype Bee
            Barrels as a test case. The bees took to the hives and began
            building almost immediately upon introduction to the living space.
            After many tests and a lot of hard work, I created a second round of
            hives, which performed even better.
          </p>
          <br />
          <p className="mb-6">
            This innovative, modern Bee Barrel hive design allows the bees to
            quickly draw honeycomb, discourages growth of burr comb, and
            prevents breakage during inspections. A built-in bee feeder provides
            nutrients to the hive until early spring when flowers arrive. The
            Bee Barrel system is now ready for manufacture and to help preserve
            and repopulate honey bee populations.{' '}
            <span className="text-blue-gray">
              Learn more about the benefits of the Bee Barrel here.
            </span>
          </p>
          <div className="grid grid-cols-2 gap-x-5 gap-y-4">
            <BenefitsImage
              imageSrc={[
                'images/about/img-4.png',
                'images/about/img-4-tab.png',
                'images/about/img-4-desk.png',
              ]}
              imageText="Construction process of the wooden prototype."
              alt="Construction process of the wooden prototype."
            />
            <BenefitsImage
              imageSrc={[
                'images/about/img-5.png',
                'images/about/img-5-tab.png',
                'images/about/img-5-desk.png',
              ]}
              imageText="Attaching the built-in bee feeder to the back ring. "
              alt="Attaching the built-in bee feeder to the back ring. "
            />
            <BenefitsImage
              imageSrc={[
                'images/about/img-6.png',
                'images/about/img-6-tab.png',
                'images/about/img-6-desk.png',
              ]}
              imageText="Testing out the Bee Barrel, made from durable material."
              alt="Testing out the Bee Barrel, made from durable material."
            />
            <BenefitsImage
              imageSrc={[
                'images/about/img-7.png',
                'images/about/img-7-tab.png',
                'images/about/img-7-desk.png',
              ]}
              imageText="The bees quickly took to their new living space."
              alt="The bees quickly took to their new living space."
            />
          </div>
        </section>
        <section>
          <Benefits
            title="Cody Adams"
            subtitle="Founder of BeeScientific"
            text="I am an avid beekeeper and have been keeping bees and harvesting honey for several decades now. One out of every five bites of food we take is made possible by the hard work of honey bees, which makes them one of the most important natural resources in the world. I’m passionate about protecting and preserving them. I have a background in data collection, automation, manufacturing, and software engineering, all which fuel my interest for inventing and building. My love for bees and nature is what led me to create an innovative and unique beehive, the Bee Barrel."
          />
        </section>
        <section className="mb-16">
          <h1 className="font-extrabold text-xl mb-2">Tour the Bee Barrel Prototype</h1>
          <div
            className="flex justify-center relative lg:mt-16"
            style={{ paddingTop: `56.25%` }}
          >
            <ReactPlayer
              style={{ position: `absolute`, top: 0, left: 0 }}
              url="https://www.youtube.com/watch?v=4FKwSIw-rSc"
              width="100%"
              height="100%"
              light="images/about/img-8-video.png"
              playing={true}
            />
          </div>
        </section>
        <section className="pb-20">
          <ViewMore />
        </section>
        <section className="pb-4 md:hidden">
          <SocialIcons />
        </section>
      </div>
    </Layout>
  );
};
export default About;
