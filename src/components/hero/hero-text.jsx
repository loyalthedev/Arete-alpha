import PASSIVE_DATA from '@/data/hero.data';

export default function HeroText() {
  return (
    <section className="mx-[102px] relative bottom-5 p-8 rounded-bl-2xl border-b-2 border-l-2">
      <div className="flex gap-2 mt-10">
        {PASSIVE_DATA.map((item) => (
          <p className="text-pri text-xl uppercase">{item.title}</p>
        ))}
      </div>
      <h1 className="uppercase text-white text-2xl lg:text-8xl font-medium max-w-sm">
        Passive <span>income</span>
      </h1>
      <p className="text-2xl text-grey max-w-[38rem]">
        Holders will get - Monthly passive income from the Arete Alpha web3
        education brand. 60% of the education brand profits will be airdropped
        to the 497 holders every month.
      </p>
    </section>
  );
}
