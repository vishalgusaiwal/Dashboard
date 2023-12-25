import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [Email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const navigate = useNavigate();
    const login = async () => {
        let result = await fetch("http://localhost:5020/login", {
            method: 'post',
            body: JSON.stringify({ "email": Email, "password": passWord }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(JSON.stringify(result));
        if (result) {
            if (result.result === undefined) {
                localStorage.setItem("user", JSON.stringify(result));
                navigate("/");
            } else {
                alert("Login Failed");
            }
        }
    }
    return (
        <div className='login'>
            <input className='inputBox' type='email' placeholder="please enter your email address"
                onChange={(e) => setEmail(e.target.value)} />
            <input className='inputBox' type='password' placeholder="please enter your password"
                onChange={(e) => setPassWord(e.target.value)} />
            <button type='button' className="btn-sm" onClick={login}>login</button>
        </div>
    );
}
export default Login;