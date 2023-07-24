import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [state, setState] = useState(false);

    const callUser = async () => {
        try {
            const res = await fetch('http://localhost:3001/getdata',
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });

            const data = await res.json();


            if (data._id) {
                setState(true);
            } else {
                setState(false);
            }
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        callUser();
    })

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
                    {state ? <NavLink to="/logout">Logout</NavLink> : <><NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Registration</NavLink></>}
                </div>
            </div>
        </nav>
    )
}