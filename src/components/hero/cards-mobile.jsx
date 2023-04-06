import CARD_DATA from '@/data/card.data';
import Image from 'next/image';
import './cards.style.css';

export default function CardsMobile() {
  return (
    <section className="flex flex-col relative mx-auto top-5 scale-[.6] lg:scale-100 h-96">
      {/* <Image src='/assets/linear-globe.svg' width={100} height={100} alt='linear Globe' className='relative top-56 left-36' /> */}
      {CARD_DATA.map((item, index) => (
        <div
          className={`bg-black border-[1px] border-white rounded-[15px] p-4 relative cube ${
            index == 0 ? 'z-[999]' : ''
          } ${index == 1 ? 'z-[99] bottom-52' : ''} ${
            index == 2 ? 'bottom-[26rem]' : ''
          }`}
          key={item.id}
        >
          <Image
            src={item.image}
            alt="Display Image"
            width={250}
            height={250}
            className="mx-auto"
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
