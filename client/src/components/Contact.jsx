import { useState, useEffect } from "react";

export default function Contact() {
    const [contact, setContact] = useState('');

    const userContact = async () => {
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

            setContact(data);

            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        userContact();
    })
    return (
        <div className="container">
            <div className="contact__main">
                <form method="post" className="contact__form">
                    <h1 className="nav__title">Contact</h1>
                    <div>
                        <div className="contact__inputs">
                            <input
                                name="name"
                                type="text"
                                value={contact.name}
                                placeholder="Your Name" />
                            <input
                                name="email"
                                type="email"
                                value={contact.email}
                                placeholder="Your Email" />
                            <input
                                name="phone"
                                type="number"
                                value={contact.phone}
                                placeholder="Your Phone" />
                        </div>
                        <textarea name="message"></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}