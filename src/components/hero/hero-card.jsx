import Cards from "../cards/cards";
import CardsMobile from "../cards/cards-mobile";
import TextMobile from "./text-mobile";
import { HERO_CARD_CONTENT } from "@/data/hero.data";

function HeroCard () {
    return (
        <section className="">
            <div className="hidden lg:flex">
                <Cards />
                <p className="absolute bottom-3 right-4 text-[18px] my-2 leading-tight text-grey max-w-[30rem]">{HERO_CARD_CONTENT}</p>
            </div>
            <div className="lg:hidden mx-auto flex flex-col">
                <CardsMobile />
                <TextMobile />
            </div>
            
        </section>
    )
}

export default HeroCard;