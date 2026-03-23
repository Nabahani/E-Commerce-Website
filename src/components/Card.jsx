import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

export default function Card({ product }) {
    const { addToCart, cartItems } = useCart();
    const currentProduct = cartItems.find((item) => item.id === product.id);
    const currentProductQuantity = currentProduct ? `(${currentProduct.quantity})` : "";

    return (
        <div className="col-md-6 col-lg-4">
            <div className="product-card">
                <div style={{ overflow: 'hidden', height: "60%" }}>
                    <img src={product.image} className="" style={{ height: "100%", width: "100%" }} alt={product.name.toLowerCase()} />
                </div>

                <div className="product-body p-3">
                    <h5 className="product-details fs-6">{product.name}</h5>
                    <p className="product-details text-primary">${product.price}</p>

                    <Link to={`/product/${product.id}`} className="btn btn-secondary btn-sm me-2">View Details</Link>
                    <button className="btn btn-primary btn-sm" onClick={() => addToCart(product.id)}>Add to Card {currentProductQuantity}</button>
                </div>
            </div>
        </div>
    )
}