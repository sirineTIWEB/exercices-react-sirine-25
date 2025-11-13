
import React from 'react';
class Taches extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { tasks } = this.props;
        return <div className = "taches-container" ><ul>{tasks.map((item, idx) => <li key={idx}> {item}</li>)}</ul></div>
    }
}


export default Taches;