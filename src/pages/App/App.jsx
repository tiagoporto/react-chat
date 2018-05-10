import React, { Component } from 'react'
import Settings from '../Settings/Settings'
import Tab from './components/Tab/Tab'
import logo from './logo.svg'
import T from 'i18n-react'
import './App.styl'
import { observer, inject } from 'mobx-react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Chat from '../Chat/Chat'

@inject('SettingsStore')
@observer
class App extends Component {
  state = {
    appLanguage: this.props.SettingsStore.language
  }

  setLanguage = language => {
    this.setState({appLanguage: language})
  }

  changeSettings = (props) => {
    return (<Settings changeAppLanguage={this.setLanguage} />)
  }

  render () {
    return ([
      <section className="hero" key="section">
        <div className="hero-body">
          <div className="container has-text-centered">
            <img src={logo} className="title" alt="logo" style={{height: 100}}/>
            <h1 className="subtitle">{T.translate('title')}</h1>
          </div>
        </div>
      </section>,

      <Tab location={this.props.location.pathname}></Tab>,

      <Switch key="switch">
        <Route path={'/chat'} exact component={Chat} />
        <Route path={'/settings'} component={this.changeSettings}/>
        <Redirect from="/" to="/chat" />
      </Switch>
    ])
  }
}

export default App
