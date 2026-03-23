import { useCart } from '../context/CartContext';
import { getProductById } from '../data/products'

export default function CartItem({ item }) {
    const currentProduct = getProductById(item.id);
    const totalItemPrice = currentProduct.price * item.quantity;

    const { updateCartItems, removeCartFromItems } = useCart();

    return (
        <div>
            <div className="summary-flex-container">
                <div className="item-details">
                    <div className="item-image">
                        <img className='img-fluid' src={currentProduct.image} alt={currentProduct.name} />
                    </div>
                    <div className='ms-2'>
                        <h5 className='item-name'>{currentProduct.name}</h5>
                        <p className='item-price text-primary'>${currentProduct.price}</p>
                    </div>
                </div>
                <div className="item-controls">
                    <div className="item-qty-controls border rounded">
                        <div>
                            <button className="btn-sm" onClick={() => updateCartItems(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button className="btn-sm" onClick={() => updateCartItems(item.id, item.quantity + 1)}>+</button>
                        </div>
                    </div>
                    <p className="text-primary item-price my-2 text-end">${totalItemPrice}</p>
                    <button className="btn btn-sm btn-secondary px-3 remove-btn" onClick={() => removeCartFromItems(item.id)}>Remove</button>
                </div>
            </div>
            <hr />
        </div>
    )
}