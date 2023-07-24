import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function Login() {
    const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3001/login', {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await res.json();
        console.log(data, "login-20", `code:${res.status}`);
        if (res.status !== 200 || email === "" || password === "") {
            window.alert(`invalid credentials — ${data.error}`);
        } else {
            dispatch({ type: "USER", payload: true });
            window.alert(data.message);
            navigate('/');
        }
    }
    return (
        <div className="container">
            <div className="reg__main">
                <div className="log__left">
                    <img className="reg__img" src="/favicon.png" alt="" />
                    <p className="reg__login">
                        Don't have an account?
                        <NavLink to="/register">Register</NavLink>
                    </p>
                </div>
                <div className="log__right">
                    <h1 className="nav__title">Login</h1>
                    <form method="post" className="reg__form">
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            name="email"
                            type="text"
                            placeholder="Email"
                        />
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                        <button type="submit" onClick={loginUser}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}