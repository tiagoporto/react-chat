import './App.styl'
import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Main } from './pages/Main/Main.jsx'
import Stores from './Stores.js'

export class App extends Component {
  render () {
    return (
      <HashRouter basename="/react-chat">
        <Provider {...Stores}>
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
        </Provider>
      </HashRouter>
    )
  }
}
