import React from 'react';

class Agenda extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            agenda: [
            '8h à 9h: Cours de 3D',
            '9h à 10h: Cours de REACT',
            '11h à 17h: Cours de 2D'
            ]
        };
    }

    render() {
        return <ul>
                {this.state.agenda.map((src, index) => (
                    <li key={index}>{src}</li>
                ))}
                </ul>
    }
}

export default Agenda
