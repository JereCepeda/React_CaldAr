import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/home">Home Page</Link>
                </li>
                <li>
                    <Link to="/login">Login Page</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;