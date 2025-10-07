import React from 'react';

class Header extends React.Component{

    render(){
        return(
            <>
                <h1>Agenda Journalier de {this.props.nom}</h1>
            </>
        )
    }
}

export default Header