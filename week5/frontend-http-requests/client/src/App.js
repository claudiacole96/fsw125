import React, { useState, useEffect } from "react"
import axios from "axios"
import Bounty from "./components/Bounty.js"
import AddBountyForm from "./components/AddBountyForm"

function App () {
    const [bounties, setBounties] = useState([])

    function getBounties() {
        axios.get("/bounties")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }

    function addBounty(newBounty) {
        axios.post("/bounties", newBounty)
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
            })
            .catch(err => console.log(err))
    }

    function deleteBounty(bountyId) {
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    }

    function updateBounty(updates, bountyId) {
        axios.put(`/bounties/${bountyId}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    }, [])

    return (
        <div>
            <AddBountyForm
                submit={addBounty}
                buttonText="Add Bounty"
            />
            { 
                bounties.map(bounty => 
                    <Bounty
                        {...bounty}
                        key={bounty.title}
                        deleteBounty={deleteBounty}
                        updateBounty={updateBounty}
                    />)}
        </div>
    )
}


export default App