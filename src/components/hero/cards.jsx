import CARD_DATA from '@/data/card.data';
import Image from 'next/image';

export default function Cards() {
  return (
    <section className="my-8 flex flex-col lg:flex-row relative scale-90">
      <Image
        src="/assets/linear-globe.svg"
        width={100}
        height={100}
        alt="linear Globe"
        className="relative top-56 left-40"
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
            width={370}
            height={370}
            className='mx-auto'
          />
          <p className="text-white text-2xl uppercase my-3">{item.title}</p>
          <div className="flex justify-between gap-3">
            <div className="price">
              <p className="text-grey text-base">{item.subtitle}</p>
              <p className="text-white text-xl">{item.price}</p>
            </div>
            <div className="time flex flex-col gap-1">
              <p className="text-white text-xl">{item.digital}</p>
              <p className="text-grey text-base relative bottom-2">{item.time}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
