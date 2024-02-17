/* eslint-disable react/prop-types */
export default function SideCard({ image, title, offer }) {
    return (
        <div
            style={{
                border: "1px solid #e0e0e0",
                padding: "20px",
                margin: "20px 0",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
            }}
            className="slide-card-container"
        >
            <div>
                <img src={image} alt={title} />
            </div>
            <div>
                <h2>{title}</h2>
                <p
                    style={{
                        color: "#7d7d7d",
                        marginTop: "10px",
                    }}
                >
                    {offer}
                </p>
            </div>
        </div>
    );
}
