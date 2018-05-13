import './Main.styl'
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Settings } from '../Settings/Settings.jsx'
import { Chat } from '../Chat/Chat.jsx'
import { AppTab } from './components/Tab/Tab.jsx'
import { AppHeader } from './components/Header/Header.jsx'
import { SettingsService } from '../Settings/SettingsService.js'

@inject('SettingsStore')
@observer
export class Main extends Component {
  state = {
    locale: this.props.SettingsStore.language
  }
  componentWillMount = () => {
    SettingsService.setLanguage()
    SettingsService.setColor()
  }

  setLanguage = language => {
    this.setState({
      locale: language
    })
  }

  render () {
    return ([
      <AppHeader key="header" />,

      <AppTab location={this.props.location.pathname} key="tab" />,

      <main className="main" key="main">
        <Switch >
          <Route path={'/chat'} exact component={Chat} />
          <Route path={'/settings'} >
            <Settings changeLocale={this.setLanguage} locale={this.state.locale} />
          </Route>
          <Redirect from="/" to="/chat" />
        </Switch>
      </main>
    ])
  }
}
