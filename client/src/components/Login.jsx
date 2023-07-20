import { NavLink } from "react-router-dom";

export default function Login() {
    return (
        <div className="container">
            <div className="reg__main">
                <div className="log__left">
                    <img className="reg__img" src="/favicon.png" alt="" />
                    <p className="reg__login">
                        Don't have an account?
                        <NavLink to="/registration">Register</NavLink>
                    </p>
                </div>
                <div className="log__right">
                    <h1 className="nav__title">Login</h1>
                    <form method="post" className="reg__form">
                        <input name="email" type="text" placeholder="Email" autoComplete="off" />
                        <input name="password" type="password" placeholder="Password" autoComplete="off" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}