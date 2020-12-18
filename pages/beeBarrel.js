import Layout from '../components/layout';
import ReactPlayer from 'react-player/youtube';
import Image from 'next/image';
import Button from '../components/button';
import Benefits from '../components/beeBarrel/benefits';
import HowItWorks from '../components/beeBarrel/howItWorks';
import ViewMore from '../components/viewMore';
import SocialIcons from '../components/socialIcons';

const BeeBarrel = () => {
  return (
    <Layout>
      <div className="mx-4 md:mx-28 lg:mx-64">
        <div
          className="flex justify-center mt-8 relative"
          style={{ paddingTop: `56.25%` }}
        >
          <ReactPlayer
            style={{ position: `absolute`, top: 0, left: 0 }}
            url="https://www.youtube.com/watch?v=4FKwSIw-rSc"
            width="100%"
            height="100%"
            light="images/beeBarrel/bee_barrel_thumbnail.png"
            playing={true}
          />
        </div>
        <h1 className="text-2xl	text-dark-black font-black pt-8 pb-4">
          Bee Barrels
        </h1>
        <section className="md:flex md:gap-x-5 md:mb-14">
          <p className="text-sm pb-6 md:max-w-bbp md:pb-0 lg:text-lg">
            The Bee Barrel is a new beehive designed to improve the environment
            for the bees and performance for the beekeeper. It maintains
            traditional beekeeping techniques while streamlining the management
            of bee colonies, reducing loss, and promoting better colony health.
            The Bee Barrel’s modern design benefits the bees, benefits the
            beekeepers, and also benefits the scientific community.
          </p>
          <div className="flex flex-col text-white bg-blue-gray max-w-bb-d-sm md:py-10 mx-auto md:px-6">
            <h1 className="text-2xl font-extrabold pt-10 text-center pb-4 md:text-base md:pb-6 md:pt-0">
              THE DESIGN PROVIDES:
            </h1>
            <ol
              className="px-16 pb-10 text-sm md:px-0 md:pb-0"
              style={{ minWidth: `205`, alignSelf: `center` }}
            >
              <li>1. Benefits for the bees.</li>
              <li>2. Benefits for the beekeepers.</li>
              <li>3. Benefits for the scientific community.</li>
            </ol>
          </div>
        </section>
        <section>
          <h1 className="text-2xl py-8 font-extrabold md:text-3xl md:mb-12 md:py-0">
            So, what are the benefits?
          </h1>
          <Benefits
            title="Climate Control and Management"
            subtitle="Bee Barrels provide insulation and stable hive temperatures."
            text="Each Bee Barrel is uniquely designed with a hollow core, making the hive
            light-weight and easy to manage. The barrel rings are twice the
            thickness (from the inside to the outside edge) of a standard hive box,
            which provides increased insulation. The Bee Barrel protects the colony
            during seasonal changes and also helps regulate the temperature and
            humidity inside the hive cavity."
            images={[
              'images/hones-bees-comb.png',
              'images/unique-hive-barrel.jpg',
            ]}
            imagesText={[
              'Honey bees quickly drawing comb once introduced to the Bee Barrel.',
              'The Bee Barrel hive’s unique design.',
            ]}
          />
          <Benefits
            title="Minimizes Stress and Eliminates Damage"
            subtitle="Bee Barrels eliminate hive damage and minimize stress to bees."
            text="The size and width of the Bee Barrel rings form a strong frame for
            holding the foundation plate. Bee Barrels are built with a durable,
            rigid material that is warp resistant, ensuring the colony maintains
            proper cell depth. The structure also discourages bees from forming
            burr or cross comb. The bees do not try to bridge gaps between
            frames with propolis as they do in traditional boxes, making
            inspections easier and resulting in less damage to the hive with
            minimal stress to the colony."
            text2="The stronger ring also eliminates frame breakage. A single broken
            frame in a langstroth ten-frame super equals 10% breakage.
            Multiplying that number over several hives and supers results in
            heavy damage repair for the beekeeper. Bee Barrels eliminate frame
            and box failure, saving beekeepers a great deal of time and money."
          />
          <Benefits
            title="Increased Productivity"
            subtitle="Bee Barrels promote productivity, yielding better results from
            colonies."
            text="Bee Barrel rings are naturally lighter than wooden supers, making
            transportation and management of hives easier. Extraction of honey
            also becomes less expensive and more efficient for beekeepers."
            text2="Honey extractors can be expensive to buy and store, or even to rent.
            With Bee Barrels, a hobbyist beekeeper with one or two hives can
            easily extract honey into a five-gallon bucket, without the need for
            costly or bulky equipment. There are benefits for commercial
            beekeepers as well. Honey extraction becomes a matter of automation.
            Bee Barrels can be attached on a track, allowing extraction of honey
            to take place as a pinewood derby car would race down a lane.
            Extraction and assembly of the hive is clean and easy, requiring
            minimal effort for maximum benefit."
          />
        </section>
        <section className="pb-16">
          <h1 className="text-2xl font-black pb-4">How It Works</h1>
          <HowItWorks
            imgSrc="/images/how-it-works-1.jpg"
            subTitle="Adjustable Bee Gate"
            text="See how easy it is to adjust the bee gate to the size you need. The
        entrance is narrow in order to give guard bees something to protect. You
        can adjust the gate from fully open to fully closed, which might be used
        when transporting the hive."
          />
          <HowItWorks
            imgSrc="/images/how-it-works-2.jpg"
            subTitle="Bee Barrel Feeder"
            text="The built-in feeder is encased in the very back ring on the barrel,
            providing basic access for the bees to their food. The feeder is
            easy to fill with whatever you’d like to give your bees, and they
            can access it from the bottom of the feeder, inside the hive."
          />
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
export default BeeBarrel;
