import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Registration() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: ""
    });
    let handle_name, handle_value;
    function handleInputs(e) {
        handle_name = e.target.name;
        handle_value = e.target.value;
        setUser({
            ...user, [handle_name]: handle_value
        })
    }
    return (
        <section className="container">
            <div className="reg__main">
                <div className="reg__left">
                    <h1 className="nav__title">Registration</h1>
                    <form className="reg__form" method="post">
                        <input value={user.name} onChange={handleInputs} autoComplete="off" name="name" type="text" placeholder="Your Name" />
                        <input value={user.email} onChange={handleInputs} autoComplete="off" name="email" type="email" placeholder="Your Email" />
                        <input value={user.phone} onChange={handleInputs} autoComplete="off" name="phone" type="number" placeholder="Your Phone" />
                        <input value={user.work} onChange={handleInputs} autoComplete="off" name="work" type="text" placeholder="Occupasion" />
                        <input value={user.password} onChange={handleInputs} autoComplete="off" name="password" type="password" placeholder="Password" />
                        <button type="submit">Register</button>
                    </form>
                </div>
                <div className="reg__right">
                    <img draggable="false" className="reg__img" src="/favicon.png" alt="logo" />
                    <p className="reg__login">
                        Already have an account?
                        <NavLink to="/login">Login</NavLink>
                    </p>
                </div>
            </div>
        </section>
    )
}