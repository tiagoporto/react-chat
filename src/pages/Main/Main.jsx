// @flow
import './Main.styl'
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Settings } from '../Settings/Settings.jsx'
import { Chat } from '../Chat/Chat.jsx'
import { AppTab } from './components/Tab/Tab.jsx'
import { AppHeader } from './components/Header/Header.jsx'

@inject('SettingsStore')
@observer
export class Main extends Component {
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
    return (
      <div className={`App App--${this.props.SettingsStore.interfaceColor}`}>
        <AppHeader />

        <AppTab location={this.props.location.pathname} key="tab" />

        <main>
          <Switch key="switch">
            <Route path={'/chat'} exact component={Chat} />
            <Route path={'/settings'} component={this.changeSettings}/>
            <Redirect from="/" to="/chat" />
          </Switch>
        </main>
      </div>
    )
  }
}
