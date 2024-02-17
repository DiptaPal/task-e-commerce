import { IoMdMenu } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
export default function Navbar() {
    return (
        <div
            style={{
                padding: "20px 10px",
            }}
            className="container"
        >
            <div className="nav-container">
                <div className="left-navbar">
                    <IoMdMenu size={25} />
                    <p>Browse Categories</p>
                </div>
                <div className="menu">
                    <div className="menu-btn">
                        <p>Menu</p>
                        <RiMenu3Fill size={25} />
                    </div>
                </div>
                <div className="right-navbar">
                    <ul className="nav-option">
                        <li>Home</li>
                        <li className="nav-btn">
                            Products
                            <MdOutlineKeyboardArrowDown size={20} />
                        </li>
                        <li className="nav-btn">
                            Categories
                            <MdOutlineKeyboardArrowDown size={20} />
                        </li>
                        <li className="nav-btn">
                            Pages
                            <MdOutlineKeyboardArrowDown size={20} />
                        </li>
                        <li>Campaign</li>
                        <li>Offer</li>
                        <li>Blog</li>
                        <li>Review</li>
                        <li>Flash Sale</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
