import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function Logout() {
    const { state, dispatch } = useContext(UserContext);
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
            dispatch({ type: "USER", payload: false });
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