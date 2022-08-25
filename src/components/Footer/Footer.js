import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer_top">
                    <NavLink to="/">
                        {/* <img src={logo} alt="" className="img-fluid" width={'150'} /> */}
                    </NavLink>
                </div>
                <div className="footer_nav row">
                    <div className="col-sm-4">
                        {/* <p>&copy; Technologic Aman {new Date().getFullYear()}</p> */}
                    </div>
                    <div className="col-sm-4 text-center">
                        <Link to="" className="footer_social"><FontAwesomeIcon icon={faFacebookF} /></Link>
                        <Link to="" className="footer_social"><FontAwesomeIcon icon={faTwitter} /></Link>
                        <Link to="" className="footer_social"><FontAwesomeIcon icon={faYoutube} /></Link>
                    </div>
                    <div className="col-sm-4 text-end">
                        <NavLink to="">Terms of use</NavLink>
                        <NavLink to="" className="ms-3">Privacy policy</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    )
}