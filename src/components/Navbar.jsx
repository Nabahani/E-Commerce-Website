import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm">
            <div className="container nav py-2">
                <Link to={'/'} className="logo text-muted">ShopHup</Link>
                <div className="nav-links">
                    <Link className="link text-muted" to={'/'}>Home</Link>
                    <Link className="link text-muted" to={'/checkout'}>Cart</Link>
                </div>
                <div className="">
                    <Link to={'/auth'} className="btn btn-sm btn-secondary link px-3" style={{ fontSize: "15px" }}>Login</Link>
                    <Link to={'/auth'} className="btn btn-sm btn-primary link px-3" style={{ fontSize: "15px" }}>Signup</Link>
                </div>
            </div>
        </nav>
    )
}