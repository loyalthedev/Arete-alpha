import Image from "next/image"
import HeroText from "./hero-text"

export default function HeroBg() {
    return (
        <div className="absolute top-0 left-0">
            <div className="hero-bg flex">
                <Image src='/assets/hero-bg.svg' width={700} height={100} alt="Hero bg" className="" />
                <Image src='/assets/Globe.svg' width={650} height={100} alt="Globe bg" className="relative right-16" />
            </div>
            <div className="">
                <HeroText />
            </div>
        </div>
    )
}