import CARD_DATA from '@/data/card.data';
import Image from 'next/image';
import './cards.style.css';

export default function CardsMobile() {
  return (
    <section className="flex flex-wrap justify-center relative mx-auto h-[16rem] top-5">
      {/* <Image src='/assets/linear-globe.svg' width={100} height={100} alt='linear Globe' className='relative top-56 left-36' /> */}
      {CARD_DATA.map((item, index) => (
        <div
          className={`bg-black border-[1px] border-white scale-[.70] rounded-[15px] p-4 relative cube ${
            index == 0 ? 'z-[999] bottom-14' : ''
          } ${index == 1 ? 'z-[99] bottom-[22rem]' : ''} ${
            index == 2 ? 'bottom-[43rem]' : ''
          }`}
          key={item.id}
        >
          <Image
            src={item.image}
            alt="Display Image"
            width={300}
            height={300}
            className="mx-auto"
          />
          <p className="text-white text-base uppercase my-3">{item.title}</p>
          <div className="flex justify-between gap-3">
            <div className="price">
              <p className="text-grey text-xs">{item.subtitle}</p>
              <p className="text-white text-sm">{item.price}</p>
            </div>
            <div className="time flex flex-col gap-1">
              <p className="text-white text-sm">{item.digital}</p>
              <p className="text-grey text-xs relative bottom-2">{item.time}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
