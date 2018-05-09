import React, { Component } from 'react'
import Tab from './components/Tab/Tab'
import logo from './logo.svg'
import './App.styl'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1>{T.translate('title')}</h1> */}
        </header>

        <Tab></Tab>
      </div>
    )
  }
}

export default App
