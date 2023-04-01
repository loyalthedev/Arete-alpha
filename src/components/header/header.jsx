import Image from 'next/image';
import NAV_LINKS from '@/data/header.data';

function Header() {
  return (
    <header className="w-full px-1">
      <div className="flex justify-between py-6 px-4">
        <div className="logo flex flex-row gap-3">
          <Image
            src="/assets/Arete.svg"
            width={20}
            height={10}
            alt="Brand Logo"
            className='w-7 md:w-full'
          />
          <p className="brand-title text-xl md:text-3xl lg:text-3xl font-normal uppercase text-white mt-3">
            Arete
          </p>
        </div>
        <div className="nav-menu justify-end">
          <ul className="flex flex-row gap-2">
            {NAV_LINKS.map((item, index) => (
                <li key={item.title} className={`text-grey text-2xl uppercase px-4 py-3 hidden md:flex ${index === 0 ? "rounded-lg bg-[#191919] text-white" : ""}`}>{item.title}</li>
            ))}
          </ul>
          <Image src='/assets/menu.svg' width={24} height={24} className='flex lg:hidden' />
        </div>
      </div>
    </header>
  );
}

export default Header;
