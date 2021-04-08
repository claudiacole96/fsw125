import React, { useState, useEffect } from "react"
import axios from "axios"
import Student from "./components/Student.js"
import AddStudentForm from "./components/AddBountyForm"
import "./App.css"

function App () {
    const [students, setStudents] = useState([])

    function getStudents() {
        axios.get("/students")
            .then(res => setStudents(res.data))
            .catch(err => console.log(err))
    }

    function addStudent(newStudent) {
        axios.post("/students", newStudent)
            .then(res => {
                setStudents(prevStudents => [...prevStudents, res.data])
            })
            .catch(err => console.log(err))
    }

    function deleteStudent(studentId) {
        axios.delete(`/students/${studentId}`)
            .then(res => {
                setStudents(prevStudents => prevStudents.filter(student => student._id !== studentId))
            })
            .catch(err => console.log(err))
    }

    function updateStudent(updates, studentId) {
        axios.put(`/students/${studentId}`, updates)
            .then(res => {
                setStudents(prevStudents => prevStudents.map(student => student._id !== studentId ? bounty : res.data))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getStudents()
    }, [])

    return (
        <div>
            <AddStudentForm
                submit={addStudent}
                buttonText="Add Student"
            />
            { 
                students.map(student => 
                    <Student
                        {...student}
                        key={student.title}
                        deleteStudent={deleteStudent}
                        updateStudent={updateStudent}
                    />)}
        </div>
    )
}


export default App