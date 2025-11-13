import React from 'react';
class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: ["constructor"] };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState((prevState) => ({
                messages: [...prevState.messages, "Component mount"] 
                
            }));
        }, 1000)
            
        console.log("Messages =>  componentDidMount");
    }
    
    componentDidUpdate(prevProps, prevState) {

        if (prevState.messages.length !== this.state.messages.length && this.state.messages.length < 3) {
            // éviter une boucle infinie car si modifie le parent
            // il va faire un nouveau rendu et donc un nouveau update
            // vu qu'on ne modifie pas les message dans l'enfants le nombre de message ne change pas
            // donc si pas de changement on ne fait rien
            console.log(" Messages => composant update ")
            
            setTimeout(() => {
                this.props.onUpdate("Messages from children => Component update");
                this.setState((prevState) => ({
                    messages: [...prevState.messages, "Component update"] 
                    
                }));
            }, 2000)
        }
    }

    componentWillUnmount() {
        this.props.onUpdate("Messages from children => Component Unmount");
        this.setState((prevState) => ({

            messages: [...prevState.messages, "Component mount"]
        }));
        console.log("Messages => componentWillUnmount");
    }

    render() {
        let messagelist = this.state.messages.map((message, index) => (
            <p key={index}>{message}</p>
        ));

        return (
            <div className="messages-container">
                <p>Message lifecycle</p>
                <div className="messages-list">
                    {messagelist}
                </div>
            </div>
        );
    }
}
export default Messages;