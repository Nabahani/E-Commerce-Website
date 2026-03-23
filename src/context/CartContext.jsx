import { createContext, useState, useContext, useEffect } from "react";
import { getProductById } from "../data/products";


const CartContext = createContext(null);

export default function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState(() => {

        const saved = localStorage.getItem("cart-items");
        return saved ? JSON.parse(saved) : [];

    });

    useEffect(() => {
        localStorage.setItem("cart-items", JSON.stringify(cartItems));
    }, [cartItems]);

    function addToCart(productId) {
        const existing = cartItems.find((item) => item.id === productId);
        if (existing) {
            const currentQuantity = existing.quantity;
            setCartItems(cartItems.map((item) => item.id === productId ? { id: productId, quantity: currentQuantity + 1 } : item));
            return;
        }
        setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }

    function removeCartFromItems(productId) {
        setCartItems(cartItems.filter((item) => item.id !== productId))
    }

    function updateCartItems(productId, quantity) {
        if (quantity <= 0) {
            removeCartFromItems(productId);
            return;
        }

        setCartItems(cartItems.map((item) => (
            item.id === productId ? { id: productId, quantity: quantity } : item
        )))
    }

    function totalPrice() {
        return cartItems.reduce((total, item) => {
            const currentProduct = getProductById(item.id);
            return currentProduct ? total + currentProduct.price * item.quantity : 0;
        }, 0);
    }

    function placeOrder() {
        setCartItems([]);
        alert("Order successful");
    }

    return (
        <CartContext.Provider value={{ addToCart, cartItems, updateCartItems, removeCartFromItems, totalPrice, placeOrder }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext);
    return context;
}