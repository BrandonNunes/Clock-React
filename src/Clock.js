import React from 'react'

const time = new Date().toLocaleTimeString();


const Clock = () => {
    return(
        <h1>{time}</h1>
    )
}

export default Clock;