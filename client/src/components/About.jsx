import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState('');

    const callAbout = async () => {
        try {
            const res = await fetch('http://localhost:3001/about',
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });

            const data = await res.json();

            setUserData(data);

            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err.message);
            navigate('/login');
        }
    }

    useEffect(() => {
        callAbout();
    })
    return (
        <div className="container">
            <form method="GET" className="about">
                <div className="about__header">
                    <img draggable="false" className="about__img" src="/favicon.png" alt="" />
                    <h1 className="about__name">{userData.name}</h1>
                    <h4 className="about__tag">{userData.work}</h4></div>
                <div className="about__details">
                    <p>Details:</p>
                    <div className="about__table">
                        <span className="about__hl">ID:</span >
                        <p>{userData._id}</p>
                    </div>
                    <div className="about__table">
                        <span className="about__hl">Name:</span >
                        <p>{userData.name}</p>
                    </div>
                    <div className="about__table">
                        <span className="about__hl">Email:</span >
                        <p>{userData.email}</p>
                    </div>
                    <div className="about__table">
                        <span className="about__hl">Phone:</span >
                        <p>{userData.phone}</p>
                    </div>
                    <div className="about__table">
                        <span className="about__hl">Occupasion:</span >
                        <p>{userData.work}</p>
                    </div>
                </div>
                <button type="submit">Edit Profile</button>
            </form>
        </div>
    )
}