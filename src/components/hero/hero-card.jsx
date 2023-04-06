import Cards from "./cards";
import CardsMobile from "./cards-mobile";
import TextMobile from "./text-mobile";

function HeroCard () {
    return (
        <section className="">
            <div className="hidden lg:flex">
                <Cards />
            </div>
            <div className="lg:hidden mx-auto flex flex-col">
                <CardsMobile />
                <TextMobile />
            </div>
            
        </section>
    )
}

export default HeroCard;