/* eslint-disable react/prop-types */
import { FaRegEye, FaStar } from "react-icons/fa";
import { GrShop } from "react-icons/gr";
import { RxLoop } from "react-icons/rx";
import { VscHeart } from "react-icons/vsc";
export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <div className="product-img-container">
                <img
                    className="product-img"
                    src={product.thumbnail}
                    alt="product"
                />
            </div>

            {/* off percent */}
            <div className="off-percent">-50%</div>

            {/* cart btn */}
            <div className="cart-btn">
                <div className="product-hover-btn">
                    <GrShop size={15} />
                </div>
                <div className="product-hover-btn">
                    <RxLoop size={15} />
                </div>
                <div className="product-hover-btn">
                    <VscHeart size={15} />
                </div>
                <div className="product-hover-btn">
                    <FaRegEye size={15} />
                </div>
            </div>

            {/* card content */}
            <div>
                <h3
                    style={{
                        fontWeight: "bold",
                        marginTop: "10px",
                        marginBottom: "10px",
                    }}
                >
                    {product.title}
                </h3>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: "10px 0",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                        }}
                    >
                        <div>
                            {
                                // eslint-disable-next-line no-plusplus
                                Array(Math.round(product.rating))
                                    .fill()
                                    .map((_, i) => (
                                        <FaStar className="rating" key={i} />
                                    ))
                            }
                        </div>
                        <p
                            style={{
                                color: "#8c8c8c",
                                fontSize: "16px",
                            }}
                        >
                            (32)
                        </p>
                    </div>
                    <div className="stock">
                        {product.stock ? (
                            <p
                                style={{
                                    color: "green",
                                }}
                            >
                                Stock Available
                            </p>
                        ) : (
                            <p
                                style={{
                                    color: "red",
                                }}
                            >
                                Out of Stock
                            </p>
                        )}
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                    }}
                >
                    <h2
                        style={{
                            color: "#0088dd",
                        }}
                    >
                        ${product.price}
                    </h2>
                    <h3
                        style={{
                            color: "#8c8c8c",
                            textDecoration: "line-through",
                        }}
                    >
                        $
                        {(
                            product.price *
                            (product.discountPercentage / 100)
                        ).toFixed(2)}
                    </h3>
                </div>
            </div>
        </div>
    );
}
