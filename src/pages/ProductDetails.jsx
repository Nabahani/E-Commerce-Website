import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getProductById } from '../data/products'

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

    return (
        <div className="page container text-muted">
            <div className="product-description rounded row">
                <div className="product-image col-12 col-md-6">
                    <img className='rounded' src={product.image} alt={product.name} />
                </div>
                <div className="product-info col-12 col-md-6 my-4 my-md-0">
                    <h5 className='product-title'>{product.name}</h5>
                    <p className='product-price text-primary mb-2 mt-3'>${product.price}</p>
                    <p className='product-text'>{product.description}</p>
                    <button className="btn btn-primary btn-sm px-3">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}