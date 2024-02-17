/* eslint-disable react/prop-types */
import { GrShop } from "react-icons/gr";
export default function OfferCart({ color, title, heading, icon, btn, image }) {
    return (
        <div
            style={{
                backgroundColor: color,
            }}
            className="offer-cart-container"
        >
            <div>
                <p
                    style={{
                        color: "#999794",
                        fontSize: "20px",
                    }}
                >
                    {title}
                </p>
                <h1
                    style={{
                        fontWeight: "bold",
                        margin: "10px 0",
                    }}
                >
                    {heading}
                </h1>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        color: "red",
                        textDecoration: "underline",
                        fontWeight: "600",
                    }}
                >
                    {icon && <GrShop size={15} color="red" />}
                    <p>{btn}</p>
                </div>
            </div>
            <div>
                <img
                    style={{
                        width: "150px",
                        height: "150px",
                    }}
                    src={image}
                    alt="offer"
                />
            </div>
        </div>
    );
}
