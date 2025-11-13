import React from 'react';

class Curdate extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const formattedTime = currentDate.toLocaleTimeString('fr-FR',
            { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        return  <div className="date-info">
            <p>Date {formattedDate} heure {formattedTime}</p>;
            </div>
    }
}


export default Curdate;