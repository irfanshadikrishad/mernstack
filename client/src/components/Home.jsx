import { useState, useEffect } from "react";

export default function Home() {
    const [username, setUserName] = useState('');
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

            setUserName(data.name);

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
        <div className="container home">
            <p className="welcome">Welcome</p>
            <h1 className="nav__title">{username == "" ? "MERN Stack Developer" : username}</h1>
            <p className="welcome_message">{username == "" ? "" : "Happy, to see you back."}</p>
        </div>
    )
}