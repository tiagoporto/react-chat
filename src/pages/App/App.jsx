import React, { Component } from 'react'
import Tab from './components/Tab/Tab'
import logo from './logo.svg'
import T from 'i18n-react'
import './App.styl'
import { observer, inject } from 'mobx-react'

@inject('SettingsStore')
@observer
class App extends Component {
  state = {
    appLanguage: this.props.SettingsStore.language
  }

  setLanguage = language => {
    this.setState({appLanguage: language})
  }

  render () {
    return (
      <div className={`App App--${this.props.SettingsStore.interfaceColor}`}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{T.translate('title')}</h1>
        </header>

        <Tab changeAppLanguage={this.setLanguage} location={this.props.location.pathname}></Tab>
      </div>
    )
  }
}

export default App
