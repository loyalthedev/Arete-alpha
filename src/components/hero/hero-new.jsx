import Image from "next/image";

function HeroNew() {
    return (
        <div className="absolute pointer-events-none">
            <Image src="/assets/main_bg.svg" alt="Main-svg" width={1700} height={100} className="hidden lg:flex" />
        </div>
    )
}


export default HeroNew;