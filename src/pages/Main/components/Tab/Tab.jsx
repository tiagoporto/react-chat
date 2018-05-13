// @flow
import './Tab.styl'
import React, { Component } from 'react'
import T from 'i18n-react'
import { Link } from 'react-router-dom'

export class AppTab extends Component {
  render () {
    return (
      <nav className="tabs">
        <ul className="tabs__list">
          <li className={`tabs__item ${this.props.location === '/chat' ? 'tabs__item--active' : ''}`}>
            <Link to={'/chat'} className="tabs__link">
              <span>{T.translate('chat.title')}</span>
            </Link>
          </li>

          <li className={`tabs__item ${this.props.location === '/settings' ? 'tabs__item--active' : ''}`}>
            <Link to={'/settings'} className="tabs__link">
              <span>
                {T.translate('settings.title')}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}
