import React from 'react';
class Header extends React.Component {

    constructor(props) {
        super(props);
        //this.myvar = "test";
    }


    render() {
        const { name, children } = this.props;
        return (
            <div  className="agenda-header" >
                <h1> Agenda journalier de {name}</h1>
                {children}
            </div>
        );
    }
}


export default Header;
