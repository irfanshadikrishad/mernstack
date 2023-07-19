import { NavLink } from "react-router-dom";

export default function Registration() {
    return (
        <section className="container">
            <div className="reg__main">
                <div className="reg__left">
                    <h1 className="nav__title">Registration</h1>
                    <form className="reg__form" method="post">
                        <input autoComplete="off" name="name" type="text" placeholder="Your Name" />
                        <input autoComplete="off" name="email" type="email" placeholder="Your Email" />
                        <input autoComplete="off" name="phone" type="number" placeholder="Your Phone" />
                        <input autoComplete="off" name="occupassion" type="text" placeholder="Occupasion" />
                        <input autoComplete="off" name="password" type="password" placeholder="Password" />
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