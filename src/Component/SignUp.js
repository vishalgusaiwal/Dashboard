import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
    const [userName, setUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [PassWord, setPassWord] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/");
        }
    }, []);
    async function CollectData() {
        let result = await fetch('http://localhost:5020/register', {
            method: 'post',
            body: JSON.stringify({"name":userName,"email":Email,"password":PassWord}),
            headers: {
                'Content-type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if (result) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/");
        }
    };
    return (
        <>
            <div className="h1_div">
                <h1>Sign Up</h1>
            </div>
            <div className="Register">
                <input placeholder="User name" type="text" className="inputBox" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                <input placeholder="Email" type="text" className="inputBox" value={Email} onChange={(e) => { setEmail(e.target.value) }} />
                <input placeholder="PassWord" type="password" className="inputBox" value={PassWord} onChange={(e) => { setPassWord(e.target.value) }} />
                <button type="button" onClick={CollectData}> Submit </button>
            </div>
        </>
    );
}