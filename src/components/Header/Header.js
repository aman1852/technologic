import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./Header.css";

export default function Header(){
    return(
        <header>
            <div className="container">
                <div className="header_nav">
                    <NavLink to="/">
                        {/* <img src={logo} alt="Technologic Aman" className="img-fluid" width={150} /> */}
                    </NavLink>
                    <ul className="header_navbar">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/courses">Courses</NavLink></li>
                        <li><NavLink to="/videos">Videos</NavLink></li>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}