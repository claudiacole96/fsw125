import React, { useState } from "react"
import AddStudentForm from "./AddStudentForm"

function Student (props) {
    const {fName, lName, house, year, quidditchTeam, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="student">
            { !editToggle ?
                <>
                    <h1>Name: {fName} {lName}</h1>
                    <h2>House: {house}</h2>
                    <p>{quidditchTeam ? "Quidditch Team Member" : ""}</p>
                    <p>Year: {year}</p>
                    <button
                        className="delete-btn"
                        onClick={() => props.deleteStudent(_id)}>
                        Delete
                    </button>
                    <button
                        className="edit-btn"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                </>
                :
                <AddStudentForm 
                    fName={fName}
                    lName={lName}
                    year={year}
                    house={house}
                    quidditchTeam={quidditchTeam}
                    _id={_id}
                    buttonText="Submit Updates"
                    submit={props.updateStudent}
                />
            }
        </div>
    )
}

export default Student