import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {

    const { user, logOut } = useAuth();

    return (
        <nav className="bg-white shadow-sm">
            <div className="container nav py-2">
                <Link to={'/'} className="logo text-muted">ShopHup</Link>
                <div className="nav-links">
                    <Link className="link text-muted" to={'/'}>Home</Link>
                    <Link className="link text-muted" to={'/checkout'}>Cart</Link>
                </div>
                {!user ? <div className="">
                    <Link to={'/auth'} className="btn btn-sm btn-secondary link-btn px-3" style={{ fontSize: "15px" }}>Login</Link>
                    <Link to={'/auth'} className="btn btn-sm btn-primary link-btn px-3" style={{ fontSize: "15px" }}>Signup</Link>
                </div> : <div className="">
                    <span className="user-email text-primary">{user.email}</span>
                    <button className="btn btn-sm btn-secondary link-btn px-3" style={{ fontSize: "15px" }} onClick={logOut}>Log Out</button>
                </div>
                }
            </div>
        </nav>
    )
}