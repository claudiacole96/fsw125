import React, {useState} from "react"

function AddStudentForm (props) {
    const initInputs = 
    {
        fName: props.fName || "",
        lName: props.lName || "",
        house: props.house || "",
        year: props.year || 0,
        quidditchTeam: props.quidditchTeam || false,
        //classes: props.classes || []
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="fName"
            className="fName"
            value={inputs.fName}
            onChange={handleChange}
            placeholder="First Name" />
            <input
            type="text"
            name="lName"
            className="lName"
            value={inputs.lName}
            onChange={handleChange}
            placeholder="Last Name" />
            <input
            type="number"
            name="year"
            className="year"
            value={inputs.year}
            onChange={handleChange}
            placeholder="Year 1-7" />
            <label className="quidditch-team">Quidditch Team?</label>
            <select
            name="quidditch"
            className="quidditch"
            onChange={handleChange}>
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select>
            <button className="form-button" onClick={(event) => props.onClick}>{props.buttonText}</button>
        </form>
    )
}

export default AddStudentForm