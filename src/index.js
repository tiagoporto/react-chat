import './main.styl'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'))
registerServiceWorker()
