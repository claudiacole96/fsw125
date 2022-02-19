import React, { useState } from "react"
import AddStudentForm from "./AddStudentForm"

function Student (props) {
    const {fname, lname, house, year, quidditchTeam, imgUrl, id} = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="student">
            { !editToggle ?
                <>
                <div className={house}>
                    <h1>{fname} {lname}</h1>
                    <img src={imgUrl}></img>
                    <h2>{house}</h2>
                    <p>{quidditchTeam ? "Student & Quidditch Team Member" : "Student"}</p>
                    <p>Year {year}</p>
                    <div className="button-div">
                        <button
                            className="delete-btn"
                            onClick={() => props.deleteStudent(id)}>
                            Delete
                        </button>
                        <button
                            className="edit-btn"
                            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                            Edit
                        </button>
                    </div>
                </div>
                </>
                :
                <>
                <AddStudentForm 
                    className={house}
                    fname={fname}
                    lname={lname}
                    year={year}
                    house={house}
                    quidditchTeam={quidditchTeam}
                    imgUrl={imgUrl}
                    id={id}
                    buttonText="Submit Updates"
                    submit={props.updateStudent}
                />
                <button
                    className="close-edit-button"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Close edit
                </button>
                </>
            }
        </div>
    )
}

export default Student