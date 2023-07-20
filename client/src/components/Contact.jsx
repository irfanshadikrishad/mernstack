export default function Contact() {
    return (
        <div className="container">
            <div className="contact__main">
                <form method="post" className="contact__form">
                    <h1 className="nav__title">Contact</h1>
                    <div>
                        <div className="contact__inputs">
                            <input name="name" type="text" placeholder="Your Name" />
                            <input name="email" type="email" placeholder="Your Email" />
                            <input name="phone" type="number" placeholder="Your Phone" />
                        </div>
                        <textarea name="message"></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}