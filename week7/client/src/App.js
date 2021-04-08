import React, { useState, useEffect } from "react"
import axios from "axios"
import Student from "./components/Student.js"
import AddStudentForm from "./components/AddStudentForm"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css"

function App () {
    const [students, setStudents] = useState([])

    function getStudents() {
        axios.get("/students")
            .then(res => {
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
    
    function handleFilter(e) {
        const value = e.target.value
        getStudents()
        if (value !== "All") {
            axios.get(`/students/search/house?house=${value}`)
            .then(res => {
                setStudents(prevStudents => prevStudents.filter(students => students.house === value))
            })
            .then(console.log(e.target.value))
            .catch(err => console.log(err))
        }
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
            <select className="filter" onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
            </select>
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