// @flow
import './Header.styl'
import React, { Component } from 'react'
import T from 'i18n-react'
import logo from './logo.svg'

export class AppHeader extends Component {
  render () {
    return (
      <header className="hero" key="section">
        <div className="hero-body">
          <div className="container has-text-centered">
            <img src={logo} className="title App-logo" alt="logo" style={{height: 100}}/>
            <h1 className="subtitle">{T.translate('title')}</h1>
          </div>
        </div>
      </header>
    )
  }
}
