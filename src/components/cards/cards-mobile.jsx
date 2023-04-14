import CARD_DATA from '@/data/card.data';
import Image from 'next/image';
import './cards.style.css';

export default function CardsMobile() {
  return (
    <div className="flex justify-center items-center">
      <section className="flex flex-wrap justify-center relative bottom-56 mx-auto h-[16rem]">
        {CARD_DATA.map((item, index) => (
          <div
            className={`bg-black border-[1px] border-white border-opacity-10 rounded-[15px] p-4 relative cube ${
              index == 0 ? 'z-[999] bottom-14' : ''
            } ${index == 1 ? 'z-[99] bottom-[23rem]' : ''} ${
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
    </div>
  );
}
