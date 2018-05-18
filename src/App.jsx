import './App.styl'
import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Main } from './pages/Main/Main.jsx'
import Stores from './Stores.js'
import ReactGA from 'react-ga'

export class App extends Component {
  componentDidMount () {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-32351360-4')
      ReactGA.pageview(window.location.pathname)
    }
  }

  render () {
    return (
      <HashRouter basename="/">
        <Provider {...Stores}>
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
        </Provider>
      </HashRouter>
    )
  }
}
