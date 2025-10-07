import Header from './composants/Header'
import Timer from './composants/Timer'
import Agenda from './composants/Agenda'
import Message from './composants/Message'
import './App.css'
import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.timer = null
    this.state = {showComponent: true}
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ showComponent: false})
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <>
      {this.state.showComponent ? <Message/> : <div className='component-removed'><p>Composant effacé</p></div>}
        <Header nom="Sirine"/>
        <Agenda/>
      </>
    )
  } 
}

export default App
