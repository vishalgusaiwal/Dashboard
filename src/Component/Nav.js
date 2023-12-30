import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function Nav() {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/login");
    }
    return (
        <div className="DivMain">
            <img src="https://www.pngitem.com/pimgs/m/100-1000583_chrome-copyrighted-cool-non-copyrighted-logos-png-transparent.png" alt="logo" className="logo" />
            {
                auth ?
                <ul className="nav-ul">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to={"/update/-1"}>Update Product</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/addProduct">Add Product</Link></li>
                    <li><Link to="/login" onClick={logout}>Logout</Link></li>
                </ul> :
                    <ul className="nav-ul nav-right">
                    <li><Link to="/SignUp">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    );
};