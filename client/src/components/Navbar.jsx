export default function Navbar() {
    return (
        <nav>
            <div className="navbar container">
                <a href="/">
                    <img className="logo" src="/favicon.png" alt="logo" />
                </a>
                <div className="nav_btns">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/login">Login</a>
                    <a href="/registration">Registration</a>
                </div>
            </div>
        </nav>
    )
}