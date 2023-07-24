import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

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

            setContact({
                ...contact,
                name: data.name,
                email: data.email,
                phone: data.phone
            });

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
    }, [])

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContact({
            ...contact,
            [name]: value
        })
    }

    function successToast() {
        toast.success("🦄 Messege Sent Successfully.", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, message } = contact;
        const res = await fetch('http://localhost:3001/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            }),
            credentials: "include"
        })

        console.log(res.status);

        const data = await res.json();

        if (res.status === 200) {
            successToast();
            setContact({
                ...contact, message: ""
            })
        } else {
            console.log('cant send message');
        }
    }

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
                                onChange={handleInputs}
                                value={contact.name}
                                placeholder="Your Name" />
                            <input
                                name="email"
                                type="email"
                                onChange={handleInputs}
                                value={contact.email}
                                placeholder="Your Email" />
                            <input
                                name="phone"
                                type="number"
                                onChange={handleInputs}
                                value={contact.phone}
                                placeholder="Your Phone" />
                        </div>
                        <textarea
                            name="message"
                            onChange={handleInputs}
                            value={contact.message}>
                        </textarea>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Send</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}