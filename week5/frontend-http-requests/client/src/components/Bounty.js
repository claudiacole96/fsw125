import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm"

function Bounty (props) {
    const {fName, lName, living, bountyAmount, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="bounty">
            { !editToggle ?
                <>
                    <h1>Name: {fName} {lName}</h1>
                    <p>{living ? "Alive" : "Dead"}</p>
                    <p>Bounty Reward: {bountyAmount}</p>
                    <p>{type}</p>
                    <button
                        className="delete-btn"
                        onClick={() => props.deleteBounty(_id)}>
                        Delete
                    </button>
                    <button
                        className="edit-btn"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                </>
                :
                <AddBountyForm 
                    fName={fName}
                    lName={lName}
                    living={living}
                    bountyAmount={bountyAmount}
                    type={type}
                    _id={_id}
                    buttonText="Submit Updates"
                    submit={props.updateBounty}
                />
            }
        </div>
    )
}

export default Bounty