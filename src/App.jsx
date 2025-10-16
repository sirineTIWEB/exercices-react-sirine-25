import React from 'react';
import Agenda from './composants/Agenda';
import Messages from './composants/Messages';
import './App.css';


class App extends React.Component {

  constructor() {
    super()
    this.timer = null
    this.state = {
      showComponent: true,
      messages: ["Parent => Constructor App"]
    }

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, "parent => componentDidMount "] }))
    }, 500)
    this.timer = setTimeout(() => {
      this.setState((prev) => ({ ...prev, showComponent: false }))
    }, 5000)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }


  // méthode appelée depuis l'enfants via onUpdate
  updateMessages = (newMessages) => {
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, newMessages] }))
  }


  render() {
    let arrTaches = [
      '8h - 9h Cours de 3D',
      '9h - 12h Cours de PHP',
      '14h - 16h Cours de javascript ',
      '16h - 17h Cours de React'
    ]

    return (
      <div>
        {this.state.showComponent ? <Messages onUpdate={this.updateMessages}   /> : <div className="component-removed"><p>Composant effacé</p></div>}

        <div className="parent-messages-container">
          <p>PARENT MESSAGES</p>
          <div className="parent-messages-list">
            {this.state.messages.map((message, index) => (<p key={index}>{message}</p>))}
          </div>
        </div>

        <Agenda name="journalier" tasks={arrTaches} />

      </div>

    );
  }
}


export default App;
