import { GoPlus } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import heroImage from "../assets/picture.png";
export default function Hero() {
    return (
        <div className="container hero-container">
            <div className="hero-left">
                <div className="hero-left-btn">
                    <p>Fashion Collection</p>
                    <MdOutlineKeyboardArrowRight size={20} />
                </div>
                <div className="hero-left-btn">
                    <p>Electronics Item</p>
                    <MdOutlineKeyboardArrowRight size={20} />
                </div>
                <div className="hero-left-btn">
                    <p>Home Appliance</p>
                    <MdOutlineKeyboardArrowRight size={20} />
                </div>
                <div className="hero-left-btn">
                    <p>Kitchen Item</p>
                    <MdOutlineKeyboardArrowRight size={20} />
                </div>
                <div className="hero-left-btn">
                    <p>Furniture</p>
                    <MdOutlineKeyboardArrowRight size={20} />
                </div>
                <div className="hero-left-btn">
                    <p>Food</p>
                    <MdOutlineKeyboardArrowRight size={20} />
                </div>
                <div className="hero-left-btn">
                    <p>Gadgets</p>
                    <MdOutlineKeyboardArrowRight size={20} />
                </div>
                <div className="hero-left-btn">
                    <p>Toys and Games</p>
                    <MdOutlineKeyboardArrowRight size={20} />
                </div>
                <div className="hero-left-btn">
                    <p>Health and Beauty</p>
                    <MdOutlineKeyboardArrowRight size={20} />
                </div>
                <div className="hero-left-btn">
                    <p>View All Categories</p>
                    <GoPlus size={20} />
                </div>
            </div>
            <div className="hero-right">
                <div className="hero-content">
                    <p className="hero-offer">
                        Up to <span className="hero-highlight">70%</span> of on
                        Black Friday
                    </p>
                    <h1 className="hero-title">
                        TRENDY <span className="hero-highlight">FASHION</span>{" "}
                        COLLECTION
                    </h1>
                    <button className="hero-btn">
                        <p>Buy Now</p>
                    </button>
                </div>
                <div className="hero-image-container">
                    <img
                        className="hero-image"
                        src={heroImage}
                        alt="hero image"
                    />
                </div>
            </div>
        </div>
    );
}
