import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext"

export default function Checkout() {

    const { cartItems, totalPrice, placeOrder } = useCart();

    return (
        <div className="page container text-muted">
            <h3 className="cart-title">Checkout</h3>
            <div className="row g-3">
                <div className="col-12 col-md-8">
                    <div className="bg-white summary-container rounded">
                        <h4 className="cart-list-title mb-3">Order Summary</h4>
                        <div className="cart-items">
                            {
                                cartItems.map((item) => (
                                    <CartItem item={item} key={item.id} />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <div className="bg-white summary-container rounded">
                        <h4 className="cart-list-title mb-3">Total</h4>
                        <p className="subtotal">
                            Subtotal:
                            <span>${totalPrice()}</span>
                        </p>
                        <p className="total">
                            Total:
                            <span className="text-primary">${totalPrice()}</span>
                        </p>
                        <hr />
                        <div className="order-btn text-center">
                            <button className="btn btn-primary btn-sm" onClick={() => placeOrder()}>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}