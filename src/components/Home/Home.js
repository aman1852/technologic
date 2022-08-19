import React from "react";
import { NavLink } from "react-router-dom";
import about from "../../assets/images/about-img.svg";
import logobg from "../../assets/images/technologic-logo.jpg";
import "./Home.css";

export default function Home() {
    let featured = [
        { label: "Lorem ipsum dolor", img: logobg, level: 'level3' },
        { label: "Lorem ipsum dolor", img: logobg, level: 'level2' },
        { label: "Lorem ipsum dolor", img: logobg, level: 'level1' },
        { label: "Lorem ipsum dolor", img: logobg, level: 'level2' },
        { label: "Lorem ipsum dolor", img: logobg, level: 'level3' },
    ]
    return (
        <div className="main">
            <div className="main_banner">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-sm-6">
                            <div className="banner_content">
                                <h1>Welcome to <span className="secondary-text">Technologic Aman</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <div className="d-flex mt-4">
                                    <NavLink to="/courses" className="custom_btn outlined">Explore courses</NavLink>
                                    <NavLink to="/blogs" className="custom_btn ms-3">View blogs</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="banner_video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/BsDoLVMnmZs?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home_about primary-bg common_sec">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-sm-5">
                            <div className="about_content">
                                <h2>Hi! My name is Aman</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <div className="row mt-5">
                                    <div className="col">
                                        <h2 className="mb-1">10+</h2>
                                        <p>Years of Experience</p>
                                    </div>
                                    <div className="col">
                                        <h2 className="mb-1">10k+</h2>
                                        <p>Youtube family</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-5">
                            <img src={about} alt="Technologic Aman" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="feature_video common_sec">
                <div className="container">
                    <div className="main_heading text-center">
                        <h3>Featured videos</h3>
                    </div>
                    <div className="featured_video_sec">
                        {featured.map((opt, index) => {
                            return (
                                <div key={index} className={`featured_video_block primary-bg ${opt.level}`}>
                                    <img src={opt.img} alt="" className="img-fluid" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}