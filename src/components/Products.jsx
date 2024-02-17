import { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
import ProductCard from "./ProductCard";
import SideCard from "./SideCard";
export default function Products() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((json) => setData(json));
    }, []);
    return (
        <>
            <div className="container products-container">
                <div className="product-left">
                    <SideCard
                        image={icon1}
                        title="Free Shipping"
                        offer="Minimum order $90"
                    />
                    <SideCard
                        image={icon2}
                        title="24/7 Support"
                        offer="Contact us 24 Hours"
                    />
                    <SideCard
                        image={icon3}
                        title="Best Prices and Offers"
                        offer="Order $100 or more"
                    />
                    <SideCard
                        image={icon4}
                        title="Easy Returns"
                        offer="Within 30 Days"
                    />
                </div>
                <div
                    style={{
                        marginTop: "20px",
                    }}
                    className="products-right"
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <h3>Featured Item </h3>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                gap: "10px",
                            }}
                        >
                            <GoArrowLeft size={20} />
                            <GoArrowRight size={20} color="#0088dd" />
                        </div>
                    </div>
                    <div
                        style={{
                            margin: "20px 0",
                            height: "2px",
                            backgroundColor: "#f5f5f5",
                        }}
                    />
                    <div className="product-card-container">
                        {data?.products?.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
