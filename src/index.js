// @flow
import './main.styl'
import App from './pages/App/App'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import settingsStore from './pages/Settings/reducers/settings.js'

const store = createStore(
  settingsStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const routes = (
  <Provider store={store}>
    <BrowserRouter basename="/react-chat">
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(routes, (document.getElementById('root'): any))
registerServiceWorker()
