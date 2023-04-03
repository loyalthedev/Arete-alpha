import CARD_DATA from '@/data/card.data';
import Image from 'next/image';

export default function Cards() {
  return (
    <section className="my-8 flex flex-col lg:flex-row relative">
      <Image
        src="/assets/linear-globe.svg"
        width={100}
        height={100}
        alt="linear Globe"
        className="relative top-56 left-36"
      />
      {CARD_DATA.map((item, index) => (
        <div
          className={`bg-black border-[1px] border-white rounded-[15px] p-4 relative ${
            index == 0 ? 'top-24 left-32' : ''
          } ${index == 1 ? 'bottom-14 left-14 z-lg' : 'z-xl top-3'}`}
          key={item.id}
        >
          <Image
            src={item.image}
            alt="Display Image"
            width={300}
            height={300}
          />
          <p className="text-white text-2xl uppercase my-3">{item.title}</p>
          <div className="flex gap-3">
            <div className="price">
              <p className="text-grey text-xl">{item.subtitle}</p>
              <p className="text-white text-2xl">{item.price}</p>
            </div>
            <div className="time flex flex-col gap-1">
              <p className="text-white text-2xl">{item.digital}</p>
              <p className="text-grey text-lg relative bottom-2">{item.time}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
