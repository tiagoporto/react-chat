// @flow
import './Header.styl'
import React, { Component } from 'react'
import T from 'i18n-react'
import logo from './logo.svg'

export class AppHeader extends Component {
  render () {
    return (
      <header className="header" key="section">
        <img src={logo} className="header__title" alt="React Logo"/>
        <h1 className="header__subtitle">{T.translate('title')}</h1>
      </header>
    )
  }
}
