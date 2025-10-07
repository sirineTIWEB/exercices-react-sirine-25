import React from 'react'

class Timer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            date: new Date().toLocaleDateString(),
            heure: new Date().toLocaleTimeString()
        };
    }

    render() {
        return <p>Date: {this.state.date}, heure: {this.state.heure}</p>
    }
}

export default Timer