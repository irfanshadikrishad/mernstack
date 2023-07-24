import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registration() {
    const navigate = useNavigate()
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
    function errorToast(error) {
        toast.error(`${error}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const register = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password } = user;
        if (name === "" || email === "" || phone === "" || work === "" || password === "") {
            errorToast("Field's can't be empty");
            navigate('/register');
            return;
        }
        const res = await fetch('http://localhost:3001/registration', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password
            })
        })
        const data = await res.json();
        console.log(data);
        if (data.status === 422 || !data) {
            errorToast(data.error);
            console.log("Invalid Registration!")
        } else {
            navigate('/login');
        }
    }
    return (
        <section className="container">
            <div className="reg__main">
                <div className="reg__left">
                    <h1 className="nav__title">Registration</h1>
                    <form className="reg__form" method="post">
                        <input value={user.name} onChange={handleInputs} name="name" type="text" placeholder="Your Name" />
                        <input value={user.email} onChange={handleInputs} name="email" type="email" placeholder="Your Email" />
                        <input value={user.phone} onChange={handleInputs} name="phone" type="number" placeholder="Your Phone" />
                        <input value={user.work} onChange={handleInputs} name="work" type="text" placeholder="Occupasion" />
                        <input value={user.password} onChange={handleInputs} name="password" type="password" placeholder="Password" />
                        <button type="submit" onClick={register}>Register</button>
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
            <ToastContainer />
        </section>
    )
}