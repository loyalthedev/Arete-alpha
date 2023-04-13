import Image from 'next/image';
import Sidebar from '../shared/sidebar';
import { SIDE_LINKS } from '@/data/header.data';
import HeroText from './hero-text';
import HeroCard from './hero-card';

const GLOBE_IMAGE_WIDTH = 550;
const GLOBE_IMAGE_HEIGHT = 100;

function Hero() {
  return (
    <header className="flex justify-center">
      <aside className="absolute bottom-10 left-0">
        <Sidebar links={SIDE_LINKS} />
      </aside>
      <div className='absolute bottom-10 left-10'>
        <HeroText title="Passive income" bodyText='Holders will get - Monthly passive income from the Arete Alpha web3
            education brand. 60% of the education brand profits will be airdropped
            to the 497 holders every <br /> month.' />
      </div>
        <section className="hero-bg absolute top-10 left-[32%] overflow-y-hidden">
          <Image
            src="/assets/Globe.svg"
            width={GLOBE_IMAGE_WIDTH}
            height={GLOBE_IMAGE_HEIGHT}
            alt="Globe bg"
            className="hidden lg:flex"
          />
        </section>
      {/* Cards */}
      <aside className="left-div absolute bottom-10 right-5 lg:right-0 py-12 lg:overflow-y-hidden">
        <section className="hero-cards flex">
          <h2 className="text-white text-[8rem] font-normal hidden lg:flex justify-end uppercase w-full">
            Arete
          </h2>
        </section>
        <HeroCard />
      </aside>
    </header>
  );
}


export default Hero;