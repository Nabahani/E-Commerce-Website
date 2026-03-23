import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getProductById } from '../data/products'
import { useCart } from '../context/CartContext';

export default function ProductDetails() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const foundProduct = getProductById(id);
        if (!foundProduct) {
            navigate('/');
            return;
        }
        setProduct(foundProduct);
    }, [id])

    if (!product) {
        return <h1>Loading...</h1>
    }

    const { addToCart, cartItems } = useCart();
    const currentProduct = cartItems.find((item) => item.id === product.id);
    const currentProductQuantity = currentProduct ? `(${currentProduct.quantity})` : "";

    return (
        <div className="page container text-muted flex-page">
            <div className="product-description rounded row">
                <div className="col-12 col-md-6">
                    <div className="product-image my-3">
                        <img className='rounded' src={product.image} alt={product.name} />
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="product-info my-3">
                        <h5 className='product-title'>{product.name}</h5>
                        <p className='product-price text-primary mb-2 mt-3'>${product.price}</p>
                        <p className='product-text'>{product.description}</p>
                        <button className="btn btn-primary btn-sm px-3" onClick={() => addToCart(product.id)}>Add to Cart {currentProductQuantity}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}