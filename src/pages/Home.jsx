import { getProducts } from '../data/products'
import Card from '../components/Card'

export default function Home() {
    const products = getProducts();


    return (
        <div className="text-muted page">
            <div className="header">
                <h3 className="title fw-bolder">Welcome to ShopHup</h3>
                <p className="sub-title">Discover amazing products at great prices</p>
            </div>

            <div className="container">
                <h4 className='mb-3'>Our products</h4>
                <div className="row g-4">
                    {
                        products.map((product) => (
                            <Card product={product} key={product.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}