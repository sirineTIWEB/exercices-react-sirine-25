import React from 'react'

class Message extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages: ["constructor"]
        };
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState((prevState) => ({
                messages: [...prevState.messages, "Component mount"]
            }))
        }, 1000)

        console.log("messages => componentDidMount")
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.messages.length !== this.state.messages.length && this.state.messages.length > 3) {
            
            console.log("messages => componentDidUpdate")

            setTimeout(() => {
                this.setState((prevState) => ({
                    messages: [...prevState.messages, "Component update"]
                }))
            }, 2000)

        }
    }

    componentWillUnmount(){
        this.setState((prevState) => ({
            messages: [...prevState.messages, "Component unmount"]
        }))

        console.log("messages => componentWillUnmount")
    }

    render(){

        let messageList = this.state.messages.map((message,index) => (
            <p key={index}>{message}</p>
        ));

        return(
            <div className='messages-container'>
                <p>Message Lifecycle</p>
                <div className='messages-list'>
                    {messageList}
                </div>
            </div>
        )
    }

}

export default Message