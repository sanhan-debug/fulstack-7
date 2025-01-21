import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Guests/guest.css'

function Guests() {

    let [guests, setGuests] = useState([])

    function getData() {
        axios.get('http://localhost:3000/guests')
            .then((res) => setGuests(res.data))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h1 style={{ textAlign: 'center', margin: '25px' }}>Featured Guests</h1>
            <div className="guest-container">
                {
                    guests.map((guest) => (
                        <div className="guest-card first">
                            <img src={guest.image} alt="" />
                            <h3 >{guest.name}</h3>
                            <span>{guest.description}</span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Guests