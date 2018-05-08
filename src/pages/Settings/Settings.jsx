import React, { Component } from 'react'
import T from 'i18n-react'
// import './Settings.styl'

class Settings extends Component {
  render () {
    return (
      <div className="settings">

        <button className="button is-primary is-large" onClick={this.changeLanguage}>{T.translate('reset')}</button>
      </div>
    )
  }
}

export default Settings
