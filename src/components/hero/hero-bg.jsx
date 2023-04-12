import Image from 'next/image';
import Sidebar from '../shared/sidebar';
import { SIDE_LINKS } from '@/data/header.data';
import HeroText from './hero-text';
import HeroCard from './hero-card';

const HERO_BG_IMAGE_WIDTH = 600;
const HERO_BG_IMAGE_HEIGHT = 100;
const GLOBE_IMAGE_WIDTH = 550;
const GLOBE_IMAGE_HEIGHT = 100;

export default function HeroBg() {
  return (
    <header className="flex">
      <section className="absolute bottom-10 left-0">
        <Sidebar links={SIDE_LINKS} />
      </section>
      <main className="absolute top-0 left-0 right-div bg-[url('/assets/frame.svg')]">
        <section className="hero-bg flex overflow-y-hidden">
          <Image
            src="/assets/hero-bg.svg"
            width={HERO_BG_IMAGE_WIDTH}
            height={HERO_BG_IMAGE_HEIGHT}
            alt="Hero bg"
            className=""
          />
          <Image
            src="/assets/Globe.svg"
            width={GLOBE_IMAGE_WIDTH}
            height={GLOBE_IMAGE_HEIGHT}
            alt="Globe bg"
            className="relative right-12 hidden lg:flex"
          />
        </section>
        <HeroText title="Passive income" bodyText='Holders will get - Monthly passive income from the Arete Alpha web3
        education brand. 60% of the education brand profits will be airdropped
        to the 497 holders every <br /> month.' />
      </main>
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
