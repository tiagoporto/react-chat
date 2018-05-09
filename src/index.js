// @flow
import './main.styl'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'
import SettingsStore from './pages/Settings/SettingsStore.js'

const routes = (
  <BrowserRouter basename="/react-chat">
    <Provider SettingsStore={SettingsStore}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(routes, (document.getElementById('root'): any))
registerServiceWorker()
