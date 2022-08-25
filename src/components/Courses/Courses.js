import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { firestore } from "../../firebase";
import { getDocs, collection } from "@firebase/firestore";
import cover from "../../assets/images/cover.png";
import "./Courses.css";

export default function Courses() {
    const ref = collection(firestore, "courses")
    const [courses, setCourses] = useState([])
    useEffect(() => {
        const getCourses = async () => {
            const data = await getDocs(ref)
            console.log("data: ", data)
            setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getCourses()
    }, [])
    console.log("courses: ", courses)
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
                            {courses.map((opt, index) => {
                                return (
                                    <div key={index} className="col-sm-4 recommended_block">
                                        <div className="card">
                                            <NavLink to={`/courses/${opt.slug}`} className="recommended_block_img">
                                                <img src={opt.img ? opt.img : cover} alt="" className="img-fluid w-100" />
                                            </NavLink>
                                            <div className="card-body">
                                                <h6 className="secondary-text">{opt.name}</h6>
                                                <h5 className="mb-2">{opt.title}</h5>
                                                <p>{opt.desc}</p>
                                                <NavLink to={`/courses/${opt.slug}`} className="custom_btn mt-4">Read more</NavLink>
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