import React from 'react'

class Timer extends React.Component {
    constructor(){
        super()
        this.state = {
            date: new Date().toLocaleDateString(),
            heure: new Date().toLocaleTimeString()
        }

    }

    componentDidMount(){
        setInterval(maj, 3000)
    }

    componentWillUnmount(){
            clearInterval()
    }

    render() {
        return (
            <p>Date: {this.state.date}, heure: {this.state.heure}</p>
        )
    }
}

export default Timer