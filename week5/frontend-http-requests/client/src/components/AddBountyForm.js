import React, {useState} from "react"

function AddBountyForm (props) {
    const initInputs = 
    {
        fName: props.fName || "",
        lName: props.lName || "",
        living: props.living || false,
        bountyAmount: props.bountyAmount || 0,
        type: props.type || "",
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
            value={inputs.fName}
            onChange={handleChange}
            placeholder="First Name" />
            <input
            type="text"
            name="lName"
            value={inputs.lName}
            onChange={handleChange}
            placeholder="Last Name" />
            <label>Alive? </label>
            <input
            type="checkbox"
            name="living"
            value={inputs.living}
            onChange={handleChange} />
            <input
            type="number"
            name="bountyAmount"
            value={inputs.bountyAmount}
            onChange={handleChange}
            placeholder="Bounty Price" />
            <input
            type="text"
            name="type"
            value={inputs.type}
            onChange={handleChange}
            placeholder="Jedi or Sith" />
            <button>{props.buttonText}</button>
        </form>
    )
}

export default AddBountyForm