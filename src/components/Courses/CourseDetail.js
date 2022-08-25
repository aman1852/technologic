import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import cover from "../../assets/images/cover.png";
import { firestore } from "../../firebase";
import { getDocs, collection } from "@firebase/firestore";
import _ from "underscore";
import "./Courses.css";

export default function CourseDetail() {
    const { id } = useParams()
    const ref = collection(firestore, "courses")
    const [courses, setCourses] = useState([])
    const [course, setcourse] = useState({})
    const [activecourse, setActivecourse] = useState({})
    useEffect(() => {
        const getCourses = async () => {
            const data = await getDocs(ref)
            console.log("data: ", data)
            let allCourses = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            let activeCourse = allCourses.filter((opt)=>opt.slug == id)
            setCourses(allCourses)
            if (activeCourse.length > 0) {
                setcourse(activeCourse[0])
                setActivecourse(activeCourse[0].list[0])
            }
        }
        getCourses()
    }, [])
    console.log("courses: ", courses)
    console.log("course: ", course)
    return (
        <div className="main">
            <div className="courses_block py-3">
                <div className="container">
                    <div className="main_heading mb-2">
                        <h3>{course.name}</h3>
                    </div>
                    <div className="recommended_sec">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="course_video">
                                    <iframe width="100%" height="450" src={activecourse && activecourse.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="col-sm-4 mb-4">
                                <div className="course_topics">
                                    {!_.isEmpty(course) && course.list.map((opt, index) => {
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
                        <div dangerouslySetInnerHTML={{ __html: activecourse.description }}></div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}