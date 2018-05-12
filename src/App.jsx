// @flow
import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Main } from './pages/Main/Main.jsx'
import Stores from './Stores.js'

export class App extends Component {
  render () {
    return (
      <BrowserRouter basename="/react-chat">
        <Provider {...Stores}>
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
        </Provider>
      </BrowserRouter>
    )
  }
}
