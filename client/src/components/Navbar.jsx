import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <div className="navbar container">
                <a href="/">
                    <img className="logo" src="/favicon.png" alt="logo" />
                </a>
                <div className="nav_btns">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Registration</NavLink>
                </div>
            </div>
        </nav>
    )
}