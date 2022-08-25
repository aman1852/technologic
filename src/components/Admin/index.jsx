import React, { useEffect, useState } from 'react';
import { firestore } from "../firebase";
import { addDoc, getDocs, collection, doc, updateDoc, deleteDoc } from "@firebase/firestore";

function Home() {
    const [value, setValue] = useState({
        name: "",
        age: 0
    })
    const [users, setUsers] = useState([])
    const ref = collection(firestore, "messages")
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            addDoc(ref, { name: value.name, age: Number(value.age) })
            setValue({ name: "", age: 0 })
        } catch (err) {
            console.log("err: ", err)
        }
    }
    const handleOnchange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const increaseAge = async (id, age) => {
        const updateUser = doc(firestore, "messages", id)
        const newAge = { age: age + 1 }
        await updateDoc(updateUser, newAge)
    }

    const deleteUser = async (id)=>{
        const updateUser = doc(firestore, "messages", id)
        await deleteDoc(updateUser, id)
    } 

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(ref)
            console.log("data: ", data)
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUsers()
    }, [])
    console.log("users: ", users)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={value.name} placeholder='Enter name' onChange={handleOnchange} />
                <input type="number" name="age" value={value.age} placeholder='Enter age' onChange={handleOnchange} />
                <button>Save</button>
            </form>
            <div>
                {users.map((user, index) => {
                    return (
                        <div key={index}>
                            <h4>{user.name} / {user.age} <button onClick={() => increaseAge(user.id, user.age)}>increase age</button></h4>
                            <button onClick={()=>deleteUser(user.id)}>Delete user</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;