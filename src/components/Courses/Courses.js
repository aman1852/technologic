import React from "react";
import { NavLink } from "react-router-dom";
import about from "../../assets/images/about-img.svg";
import logobg from "../../assets/images/technologic-logo.jpg";
import cover from "../../assets/images/cover.png";
import "./Courses.css";

export default function Courses() {
    let recommended = [
        { label: "Lorem ipsum dolor sit amet", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", img: cover, type: 'HTML', link: "/courses/html" },
        { label: "Lorem ipsum dolor sit amet", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", img: cover, type: 'CSS', link: "/courses/css" },
        { label: "Lorem ipsum dolor sit amet", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", img: cover, type: 'Javascript', link: "/courses/javascript" },
    ]
    return (
        <div className="main">
            <div className="courses_block common_sec">
                <div className="container">
                    <div className="main_heading text-center">
                        <h3>Courses</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    </div>
                    <div className="recommended_sec">
                        <div className="row">
                            {recommended.map((opt, index) => {
                                return (
                                    <div key={index} className="col-sm-4 recommended_block mb-4">
                                        <div className="card">
                                            <div className="recommended_block_img">
                                                <img src={opt.img} alt="" className="img-fluid w-100" />
                                            </div>
                                            <div className="card-body">
                                                <h6 className="secondary-text">{opt.type}</h6>
                                                <h5 className="mb-2">{opt.label}</h5>
                                                <p>{opt.desc}</p>
                                                <NavLink to={opt.link} className="custom_btn mt-4">Read more</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}