import PASSIVE_DATA from '@/data/hero.data';
import Image from 'next/image';

export default function TextMobile() {
  return (
    <div className="relative top-10 overflow-y-hidden">
      <h1 className="text-white text-7xl uppercase">Passive</h1>
      <div className="flex">
        <div>
          {PASSIVE_DATA.map((item) => (
            <p className="text-pri text-lg">{item.title}</p>
          ))}
        </div>
        <h1 className="text-white text-7xl uppercase">Income</h1>
        <Image
          src="/assets/linear-globe.svg"
          width={70}
          height={70}
          alt="linear Globe"
          className="relative bottom-0 right-10"
        />
      </div>
      <p className="text-grey text-lg max-w-xs ml-24">Holders will get - Monthly passive income from the Arete Alpha web3 education brand.</p>
    </div>
  );
}
