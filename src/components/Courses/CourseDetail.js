import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import cover from "../../assets/images/cover.png";
import _ from "underscore";
import "./Courses.css";

export default function CourseDetail() {
    const { id } = useParams()
    let courseArray = [
        {
            slug: "html", label: "Lorem ipsum dolor sit amet", img: cover, type: 'HTML', courses: [
                { id: 1, title: "Lorem ipsum dolor sit amet", src: "https://www.youtube.com/embed/DZKOunP-WLQ" },
                { id: 2, title: "Lorem ipsum dolor sit amet sd af sd", src: "https://www.youtube.com/embed/BsDoLVMnmZs" },
                { id: 1, title: "Lorem ipsum dolor sit amet", src: "https://www.youtube.com/embed/DZKOunP-WLQ" },
                { id: 2, title: "Lorem ipsum dolor sit amet sd af sd", src: "https://www.youtube.com/embed/BsDoLVMnmZs" },
                { id: 1, title: "Lorem ipsum dolor sit amet", src: "https://www.youtube.com/embed/DZKOunP-WLQ" },
                { id: 2, title: "Lorem ipsum dolor sit amet sd af sd", src: "https://www.youtube.com/embed/BsDoLVMnmZs" },
                { id: 1, title: "Lorem ipsum dolor sit amet", src: "https://www.youtube.com/embed/DZKOunP-WLQ" },
                { id: 2, title: "Lorem ipsum dolor sit amet sd af sd", src: "https://www.youtube.com/embed/BsDoLVMnmZs" },
                { id: 1, title: "Lorem ipsum dolor sit amet", src: "https://www.youtube.com/embed/DZKOunP-WLQ" },
                { id: 2, title: "Lorem ipsum dolor sit amet sd af sd", src: "https://www.youtube.com/embed/BsDoLVMnmZs" },
                { id: 1, title: "Lorem ipsum dolor sit amet", src: "https://www.youtube.com/embed/DZKOunP-WLQ" },
                { id: 2, title: "Lorem ipsum dolor sit amet sd af sd", src: "https://www.youtube.com/embed/BsDoLVMnmZs" },
            ]
        },
    ]
    const [course, setcourse] = useState({})
    const [activecourse, setActivecourse] = useState({})
    useEffect(() => {
        let filterData = courseArray.filter((opt) => opt.slug == id)
        if (filterData.length > 0) {
            setcourse(filterData[0])
            setActivecourse(filterData[0].courses[0])
        }
    }, [])
    return (
        <div className="main">
            <div className="courses_block py-3">
                <div className="container">
                    <div className="recommended_sec">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="course_video">
                                    <iframe width="100%" height="500" src={activecourse.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="col-sm-4 mb-4">
                                <div className="course_topics">
                                    {!_.isEmpty(course) && course.courses.map((opt, index) => {
                                        return (
                                            <div className="card mb-3" key={index}>
                                                <div className="card-body">
                                                    <label>
                                                        <input type={"checkbox"} />
                                                        <span className="ms-2">{opt.title}</span>
                                                    </label>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="course_overview">
                        <div className="main_heading">
                            <h3>{course.type}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}