import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

export default function Navbar() {
    const { state, dispatch } = useContext(UserContext);

    const RenderMenu = () => {
        console.log(state);
        if (state) {
            return (
                <>
                    <div className="nav_btns">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/logout">Logout</NavLink>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="nav_btns">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Registration</NavLink>
                    </div>
                </>
            )

        }


        // <div className="nav_btns">
        //     <NavLink to="/">Home</NavLink>
        //     <NavLink to="/about">About</NavLink>
        //     <NavLink to="/contact">Contact</NavLink>
        //     <NavLink to="/login">Login</NavLink>
        //     <NavLink to="/register">Registration</NavLink>
        //     <NavLink to="/logout">Logout</NavLink>
        // </div>

    }
    return (
        <nav>
            <div className="navbar container">
                <a href="/">
                    <img className="logo" src="/favicon.png" alt="logo" />
                </a>
                <RenderMenu />
            </div>
        </nav>
    )
}