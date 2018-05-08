import React, { Component } from 'react'
import T from 'i18n-react'
// import './Settings.styl'

class Settings extends Component {
  constructor (props) {
    super(props)
    this.state = { language: 'eng' }

    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changeLanguage () {
    if (this.state.language === 'eng') {
      T.setTexts(require('../../languages/pt-BR.json'))
      this.setState(
        {language: 'brl'}
      )
    } else {
      T.setTexts(require('../../languages/en.json'))
      this.setState(
        {language: 'eng'}
      )
    }
  }

  render () {
    return (
      <form>
        <fieldset>
          <p>
            <label htmlFor="user-name">{T.translate('settings.user_name')}</label>
            <input type="text" name="name" id="user-name" defaultValue="small"/>
          </p>
          <p>
            {T.translate('settings.interface_color')}
          </p>

          <input type="radio" name="interface" id="interface-light" defaultValue="light"/>
          <label htmlFor="interface-light">{T.translate('settings.interface_light')}</label>

          <input type="radio" name="interface" id="interface_dark" defaultValue="dark"/>
          <label htmlFor="interface_dark">{T.translate('settings.interface_dark')}</label>

          <p>
            {T.translate('settings.language')}
            <select name="" id="" onChange={this.changeLanguage}>
              <option value="en">{T.translate('languages.en')}</option>
              <option value="pt-BR">{T.translate('languages.pt-BR')}</option>
            </select>
          </p>

          <button className="button is-primary is-large">
            {T.translate('settings.reset')}
          </button>
        </fieldset>
      </form>
    )
  }
}

export default Settings
