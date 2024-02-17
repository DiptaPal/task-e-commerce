import { IoIosSearch } from "react-icons/io";
import { LiaCartPlusSolid, LiaUser } from "react-icons/lia";
import { RxLoop } from "react-icons/rx";
import { VscHeart } from "react-icons/vsc";

export default function TopNavbar() {
    return (
        <div className="container">
            <div className="top-nav-container">
                <div>
                    <h3 className="nav-title">Task</h3>
                </div>
                <div className="top-nav-middle">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search for Products"
                    />
                    <select className="select-box ">
                        <option>All Categories</option>
                        <option>Projects</option>
                        <option>Tasks</option>
                        <option>Users</option>
                    </select>
                    <div className="search-btn-icon">
                        <IoIosSearch size={20} />
                    </div>
                </div>
                <div className="top-nav-right-side">
                    <div className="cart-section">
                        <RxLoop size={25} />
                        <VscHeart size={25} />
                        <div className="cart-icon">
                            <LiaCartPlusSolid size={25} />
                            <span className="cart-value">0</span>
                        </div>
                    </div>
                    <div className="cart-section">
                        <p className="account">Account</p>
                        <LiaUser size={25} color="#0088dd" />
                        <p className="user-amount">$20.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
