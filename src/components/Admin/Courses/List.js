import React, { useEffect, useState } from 'react';
import { firestore } from "../../../firebase";
import { addDoc, getDocs, collection, doc, updateDoc, deleteDoc } from "@firebase/firestore";
import { Link, NavLink } from "react-router-dom";

function List() {
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
        <div className='course_list_admin py-4'>
            <div className='container'>
                <div className='d-flex justify-content-between mb-3'>
                    <h4>Courses</h4>
                    <NavLink to="/admin/courses/add" className='btn btn-primary'>Add new</NavLink>
                </div>
                <div className='course_table'>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{course.title}</td>
                                        <td>{course.name}</td>
                                        <td>
                                            <button className='btn btn-primary btn-sm'>Edit</button>
                                            <button className='btn btn-danger btn-sm ms-2'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default List;