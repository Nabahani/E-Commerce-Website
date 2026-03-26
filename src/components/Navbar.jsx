import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {

    const { user, logOut } = useAuth();

    function closeSidebar() {
        const sidebarEl = document.querySelector(".sidebar");
        sidebarEl.style.display = "none";
    }

    function openSidebar() {
        const sidebarEl = document.querySelector(".sidebar");
        sidebarEl.style.display = "block";
    }

    return (
        <>
            <nav className="bg-white shadow-sm">
                <div className="container nav py-2">
                    <Link to={'/'} className="logo text-muted ms-3 ms-sm-0">ShopHup</Link>
                    <div className="nav-links hideOnMobile">
                        <Link className="link text-muted" to={'/'}>Home</Link>
                        <Link className="link text-muted" to={'/checkout'}>Cart</Link>
                    </div>
                    {!user ? <div className="hideOnMobile">
                        <Link to={'/auth?mode=login'} className="btn btn-sm btn-secondary link-btn px-3" style={{ fontSize: "15px" }}>Login</Link>
                        <Link to={'/auth?mode=signup'} className="btn btn-sm btn-primary link-btn px-3" style={{ fontSize: "15px" }}>Signup</Link>
                    </div> : <div className="hideOnMobile">
                        <span className="user-email text-primary">{user.email}</span>
                        <button className="btn btn-sm btn-secondary link-btn px-3" style={{ fontSize: "15px" }} onClick={logOut}>Log Out</button>
                    </div>
                    }
                    <button type="button" onClick={() => openSidebar()} className="for-sidebar open-btn">
                        <i className="bi bi-list"></i>
                    </button>
                </div>
            </nav>

            <nav className="sidebar text-muted">
                <div className="container nav py-2">
                    <button type="button" onClick={() => closeSidebar()} className="icon for-sidebar text-muted">
                        <i className="bi bi-x"></i>
                    </button>
                    <Link className="link text-muted" to={'/'}>Home</Link>
                    <Link className="link text-muted" to={'/checkout'}>Cart</Link>

                    {
                        !user ?
                            <div className="btn-el">
                                <Link to={'/auth?mode=login'} className="btn btn-sm btn-secondary link-btn px-3" style={{ fontSize: "15px" }}>Login</Link>
                                <Link to={'/auth?mode=signup'} className="btn btn-sm btn-primary link-btn px-3" style={{ fontSize: "15px" }}>Signup</Link>
                            </div>
                            :
                            <div className="">
                                <span className="user-email text-primary">{user.email}</span>
                                <button className="btn btn-sm btn-secondary link-btn px-3" style={{ fontSize: "15px" }} onClick={logOut}>Log Out</button>
                            </div>
                    }
                </div>
            </nav>
        </>
    )
}