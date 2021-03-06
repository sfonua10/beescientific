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
      <div className="mx-4 md:mx-28 lg:mx-auto max-w-4xl">
        <div
          className="flex justify-center mt-8 relative lg:mt-16"
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
        <section className="md:flex md:gap-x-5 md:mb-14">
          <div>
            <h1 className="text-2xl	text-dark-black font-black pt-8 pb-4 lg:text-4xl">
              Bee Barrels
            </h1>
            <p className="text-sm pb-6 md:pb-0 lg:text-lg">
              The Bee Barrel is a new beehive designed to improve the
              environment for the bees and performance for the beekeeper. It
              maintains traditional beekeeping techniques while streamlining the
              management of bee colonies, reducing loss, and promoting better
              colony health. The Bee Barrel’s modern design benefits the bees,
              benefits the beekeepers, and also benefits the scientific
              community.
            </p>
          </div>
          <div className="flex flex-col text-white bg-blue-gray md:self-center md:min-w-1/2 mx-auto md:mx-0 md:px-6 md:py-10 md:mt-16 lg:px-12 lg:py-12">
            <h1 className="text-2xl font-extrabold pt-10 text-center pb-4 md:text-base md:pb-6 md:pt-0 lg:text-2xl">
              THE DESIGN PROVIDES:
            </h1>
            <ol
              className="px-16 pb-10 text-sm md:px-0 md:pb-0 lg:text-lg"
              style={{ minWidth: `205`, alignSelf: `center` }}
            >
              <li>1. &nbsp;Benefits for the bees.</li>
              <li>2. &nbsp;Benefits for the beekeepers.</li>
              <li>3. &nbsp;Benefits for the scientific community.</li>
            </ol>
          </div>
        </section>
        <section>
          <h1 className="text-2xl py-8 font-extrabold md:text-3xl md:mb-12 md:py-0 lg:text-3xl">
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
              'images/beeBarrel/bees-drawing-comb-174w.jpg',
              'images/beeBarrel/bees-drawing-comb-257w.jpg',
              'images/beeBarrel/bees-drawing-comb-441w.png',
            ]}
            images2={[
              'images/beeBarrel/hive-unique-161w.jpg',
              'images/beeBarrel/hive-unique-258w.png',
              'images/beeBarrel/hive-unique-441w.png',
            ]}
            imagesText={[
              'Honey bees quickly drawing comb once introduced to the Bee Barrel.',
              'The Bee Barrel hive’s unique design.',
            ]}
            alt={[
              'Honey bees drawing comb',
              'Unique Bee Barrel hive design'
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
          <h1 className="text-2xl font-black pb-4 lg:mt-10 lg:text-4xl">How It Works</h1>
          <HowItWorks
            imgSrc="/images/how-it-works-1.jpg"
            subTitle="Adjustable Bee Gate"
            text="See how easy it is to adjust the bee gate to the size you need. The
        entrance is narrow in order to give guard bees something to protect. You
        can adjust the gate from fully open to fully closed, which might be used
        when transporting the hive."
            url="https://www.youtube.com/watch?v=h-6k5cRBON0"
            thumbnail="/images/beeBarrel/how-it-works-thumbnail1.png"
          />
          <HowItWorks
            imgSrc="/images/how-it-works-2.jpg"
            subTitle="Bee Barrel Feeder"
            text="The built-in feeder is encased in the very back ring on the barrel,
            providing basic access for the bees to their food. The feeder is
            easy to fill with whatever you’d like to give your bees, and they
            can access it from the bottom of the feeder, inside the hive."
            url="https://www.youtube.com/watch?v=2NeC-cIyjBw"
            thumbnail="/images/beeBarrel/how-it-works-thumbnail2.png"
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
