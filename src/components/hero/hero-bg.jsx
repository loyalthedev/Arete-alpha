import Image from "next/image"
import HeroText from "./hero-text"
import HeroCard from "./hero-card"

export default function HeroBg() {
    return (
        <section className="flex ">
            <div className="absolute top-0 left-0 right-div">
                <div className="hero-bg flex">
                    <Image src='/assets/hero-bg.svg' width={600} height={100} alt="Hero bg" className="" />
                    <Image src='/assets/Globe.svg' width={550} height={100} alt="Globe bg" className="relative right-14 hidden lg:flex" />
                    <Image src='/assets/stone.svg' width={40} height={40} alt="Stone bg" className="relative right-[29%] bottom-2 hidden lg:flex" />
                    
                </div>
                <div className="">
                    <HeroText />
                </div>
            </div>
            <div className="left-div absolute top-[2.65%] right-5 lg:right-0 border-none lg:border-b-[1px] lg:border-dashed py-12 lg:overflow-y-hidden">
                <div className="hero-cards flex">
                    <h1 className="text-white text-[8rem] font-normal hidden lg:flex justify-end uppercase w-full">Arete</h1>
                </div>
                <div className="">
                    <HeroCard />
                </div>
            </div>
        </section>
    )
}