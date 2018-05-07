import React, { Component } from 'react'
import logo from './logo.svg'
import T from 'i18n-react'
import './App.styl'

T.setTexts(require('../../languages/en.json'))

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { language: 'eng' }

    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changeLanguage () {
    if (this.state.language === 'eng') {
      T.setTexts(require('../../languages/pt-BR.json'))
      this.setState(
        {language: 'brl'}
      )
    } else {
      T.setTexts(require('../../languages/en.json'))
      this.setState(
        {language: 'eng'}
      )
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{T.translate('welcome')}</h1>
        </header>
        <p className="App-intro">
          {T.translate('start')}
        </p>
        <button onClick={this.changeLanguage}>change text</button>
      </div>
    )
  }
}

export default App
