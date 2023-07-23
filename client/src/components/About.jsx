import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
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
    }, [])
    return (
        <div className="container">
            <form method="GET" className="about">
                <div className="about__header">
                    <img draggable="false" className="about__img" src="/favicon.png" alt="" />
                    <h1 className="about__name">zeitu</h1>
                    <h4 className="about__tag">MERN Stack Developer</h4></div>
                <div className="about__details">
                    <p>Details:</p>
                    <div className="about__table">
                        <span className="about__hl">ID:</span >
                        <p>2210012101087</p>
                    </div>
                    <div className="about__table">
                        <span className="about__hl">Name:</span >
                        <p>zeitu</p>
                    </div>
                    <div className="about__table">
                        <span className="about__hl">Email:</span >
                        <p>irfanshadikrishad@gmail.com</p>
                    </div>
                    <div className="about__table">
                        <span className="about__hl">Phone:</span >
                        <p>01767342505</p>
                    </div>
                    <div className="about__table">
                        <span className="about__hl">Occupasion:</span >
                        <p>MERN Stack Developer</p>
                    </div>
                </div>
                <button type="submit">Edit Profile</button>
            </form>
        </div>
    )
}