import React, {useState} from "react"

function AddStudentForm (props) {
    const initInputs = 
    {
        fName: props.fName || "",
        lName: props.lName || "",
        imgUrl: props.imgUrl || "",
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
    function handleDropdown(e) {
        const name = e.target.name
        const value = e.target.value
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
        console.log(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form className={inputs.house} onSubmit={handleSubmit}>
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
            type="text"
            name="imgUrl"
            className="imgUrl"
            value={inputs.imgUrl}
            onChange={handleChange}
            placeholder="Image Url" />
            <label className="house-label">House </label>
            <select
            name="house"
            className="house"
            onChange={handleDropdown}>
                <option value="none">Select House</option>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
            </select>
            <input
            type="number"
            name="year"
            className="year"
            value={inputs.year}
            onChange={handleChange}
            placeholder="Year 1-7" />
            <label className="quidditch-team">Quidditch Team </label>
            <select
            name="quidditch"
            className="quidditch"
            onChange={handleChange}>
                <option value="none">Select</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select>
            <button className="form-button" onClick={(event) => props.onClick}>{props.buttonText}</button>
        </form>
    )
}

export default AddStudentForm