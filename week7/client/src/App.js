import React, { useState, useEffect } from "react"
import axios from "axios"
import Student from "./components/Student.js"
import AddStudentForm from "./components/AddStudentForm"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css"

function App () {
    const [students, setStudents] = useState([])
    const [filterHouse, setFilterHouse] = useState([])

    function getStudents() {
        axios.get("/students")
            .then(res => {
              setFilterHouse(res.data)
              setStudents(res.data)
            })
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
                setStudents(prevStudents => prevStudents.map(student => student._id !== studentId ? student : res.data))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getStudents()
    }, [])

    return (
        <div id="web-div">
            <Header />
            <AddStudentForm
                submit={addStudent}
                buttonText="Add Student"
            />
            <div id="student-div">
              { 
                  students.map(student => 
                      <Student
                          {...student}
                          key={student.title}
                          deleteStudent={deleteStudent}
                          updateStudent={updateStudent}
                      />)}
            </div>
            <Footer />
        </div>
    )
}


export default App