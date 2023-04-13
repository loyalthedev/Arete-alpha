import PASSIVE_DATA from '@/data/hero.data';

export default function HeroText({ title, bodyText }) {
  return (
    <section className="mx-[87px] hidden lg:flex flex-col px-8 py-[1.45rem] relative ">
      <div className="flex gap-2 mt-10">
        {PASSIVE_DATA.map((item) => (
          <p className="text-pri text-xl uppercase">{item.title}</p>
        ))}
      </div>
      <h1 className="uppercase text-white text-2xl lg:text-8xl font-medium max-w-sm">
        {title}
      </h1>
      <p className="text-[18px] my-2 leading-tight text-grey max-w-[40rem]">
        {bodyText}
      </p>
    </section>
  );
}
