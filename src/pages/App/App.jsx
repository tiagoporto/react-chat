import React, { Component } from 'react'
import logo from './logo.svg'
import T from 'i18n-react'
import './App.styl'

T.setTexts(require('../../languages/pt-BR.json'))

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{T.translate('welcome')}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
