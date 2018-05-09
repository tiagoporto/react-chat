import Chat from '../../../Chat/Chat'
import Settings from '../../../Settings/Settings'
import React, { Component } from 'react'
import { Link, Switch, Route, Redirect } from 'react-router-dom'

class Tab extends Component {
  render () {
    return ([
      <nav key="tab">
        <ul className="tabs is-toggle is-fullwidth">
          <li className="is-active">
            <Link to={'/chat'}>
              <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
              {/* <span>{T.translate('chat.title')}</span> */}
            </Link>
          </li>
          <li>
            <Link to={'/settings'}>
              <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
              {/* <span>{T.translate('settings.title')}</span> */}
            </Link>
          </li>
        </ul>
      </nav>,

      <Switch key="switch">
        <Route path={'/chat'} exact component={Chat} />
        <Route path={'/settings'} component={Settings} />
        <Redirect from="/" to="/chat" />
      </Switch>
    ])
  }
}

export default Tab
