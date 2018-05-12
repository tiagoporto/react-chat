// @flow
import './main.styl'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App/App.jsx'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'
import Stores from './Stores.js'

const routes = (
  <BrowserRouter basename="/react-chat">
    <Provider {...Stores}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(routes, (document.getElementById('root'): any))
registerServiceWorker()
