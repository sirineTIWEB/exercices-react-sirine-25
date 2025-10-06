import React from 'react'

function Timer(){
    const date = new Date().toLocaleDateString();
    const heure = new Date().toLocaleTimeString();

    return(
        <>
            <p>Date: {date}, heure: {heure}</p>
        </>

    )
}

export default Timer