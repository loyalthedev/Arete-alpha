import CARD_DATA from '@/data/card.data';
import Image from 'next/image';

export default function Cards() {
  return (
    <section className="my-8 flex flex-col lg:flex-row relative left-14 scale-90">
      <Image
        src="/assets/linear-globe.svg"
        width={100}
        height={100}
        alt="linear Globe"
        className="relative top-[17rem] left-44"
      />
      {CARD_DATA.map((item, index) => (
        <div
          className={`bg-black border-[1px] border-white border-opacity-10 rounded-[15px] p-4 relative ${
            index == 0 ? 'top-[5rem] left-36' : ''
          } ${index == 1 ? 'bottom-16 left-14 z-lg' : 'z-xl top-3'}`}
          key={item.id}
        >
          <Image
            src={item.image}
            alt="Display Image"
            width={340}
            height={340}
            className="mx-auto"
          />
          <p className="text-white text-2xl uppercase my-3">{item.title}</p>
          <div className="flex justify-between gap-3">
            <div className="price">
              <p className="text-grey text-base">{item.subtitle}</p>
              <p className="text-white text-xl">{item.price}</p>
            </div>
            <div className="time flex gap-1">
              <div className="flex flex-col gap-1">
                <p className="number">02: </p>
                <p className="words">HOURS</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="number">17: </p>
                <p className="words">MINUTES</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="number">26</p>
                <p className="words">SECONDS</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
