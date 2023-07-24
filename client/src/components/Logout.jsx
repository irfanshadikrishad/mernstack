import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:3001/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            navigate('/login', { replace: true });
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch(err => {
            console.log(`—logut err : ${err}`);
        })
    })
    return (
        <div className="container">
            <h1>Logout</h1>
        </div>
    )
}