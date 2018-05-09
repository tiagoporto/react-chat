import React, { Component } from 'react'
import Tab from './components/Tab/Tab'
import logo from './logo.svg'
import T from 'i18n-react'
import './App.styl'

T.setTexts(require('../../languages/en.json'))

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{T.translate('title')}</h1>
        </header>

        <Tab></Tab>
      </div>
    )
  }
}

export default App
