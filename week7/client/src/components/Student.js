import React, { useState } from "react"
import AddStudentForm from "./AddStudentForm"

function Student (props) {
    const {fName, lName, house, year, quidditchTeam, imgUrl, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="student">
            { !editToggle ?
                <>
                <div className={house}>
                    <h1>{fName} {lName}</h1>
                    <img src={imgUrl}></img>
                    <h2>{house}</h2>
                    <p>{quidditchTeam ? "Student & Quidditch Team Member" : "Student"}</p>
                    <p>Year {year}</p>
                    <div className="button-div">
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
                    </div>
                </div>
                </>
                :
                <>
                <AddStudentForm 
                    className={house}
                    fName={fName}
                    lName={lName}
                    year={year}
                    house={house}
                    quidditchTeam={quidditchTeam}
                    imgUrl={imgUrl}
                    _id={_id}
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