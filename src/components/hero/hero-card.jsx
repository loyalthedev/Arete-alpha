import Cards from "./cards";
import CardsMobile from "./cards-mobile";

function HeroCard () {
    return (
        <section>
            <div className="lg:hidden mx-auto">
                <CardsMobile />
            </div>
            <div className="hidden lg:flex">
                <Cards />
            </div>
            
        </section>
    )
}

export default HeroCard;