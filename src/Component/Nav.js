import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function Nav() {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/SignUp");
    }
    return (
        <div className="DivMain">
            <ul className="nav-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/update">Update Profile</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/addProduct">Add Product</Link></li>
                {/*<li>{auth ? <Link onClick={logout} to="/logout">logout</Link> : <Link to="/SignUp">Sign Up</Link>}</li>*/}
                {/*<li><Link to="/login">Login</Link></li>*/}
                {
                    auth ? <li><Link onClick={logout} to="/logout">logout</Link></li> : <><li><Link to="/SignUp">Sign Up</Link></li><li><Link to="/login">Login</Link></li></>
                }
            </ul>
        </div>
    );
};