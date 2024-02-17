import Offer1 from "../assets/offer-1.png";
import Offer2 from "../assets/offer-2.png";
import Offer3 from "../assets/offer-3.png";
import Offer4 from "../assets/offer-4.png";
import OfferCard from "./OfferCard";

export default function Offer() {
    return (
        <div className="container offer-container">
            <OfferCard
                color={"#eff9ff"}
                title="Gadget Store"
                heading="30% Sale"
                icon={true}
                btn="Buy Now"
                image={Offer1}
            />
            <OfferCard
                color={"#fff8f0"}
                title="Bundle Package"
                heading="Save 30%"
                icon={false}
                btn="See All"
                image={Offer2}
            />
            <OfferCard
                color={"#eff9ff"}
                title="Valentines Offer"
                heading="30% Sale"
                icon={true}
                btn="Buy Now"
                image={Offer3}
            />
            <OfferCard
                color={"#ffecf0"}
                title="Relax Chair"
                heading="New Arrival"
                icon={true}
                btn="Buy Now"
                image={Offer4}
            />
        </div>
    );
}
