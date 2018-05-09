// @flow
import React, { Component } from 'react'
import T from 'i18n-react'
import { observer, inject } from 'mobx-react'

@inject('SettingsStore')
@observer
class Settings extends Component {
  changeLanguage = event => {
    this.props.SettingsStore.changeLanguage(event.target.value)
    this.props.changeAppLanguage(event.target.value)
  }

  render () {
    return (
      <form>
        <fieldset>
          <p>
            <label htmlFor="user-name">{T.translate('settings.user_name')}</label>
            <input type="text" name="name" id="user-name" defaultValue={this.props.SettingsStore.userName}/>
          </p>

          <p>
            {T.translate('settings.interface_color')}
          </p>

          <input type="radio" name="interface" id="interface-light" value="light" checked={this.props.SettingsStore.interfaceColor === 'light'}/>
          <label htmlFor="interface-light">{T.translate('settings.interface_light')}</label>

          <input type="radio" name="interface" id="interface_dark" value="dark" checked={this.props.SettingsStore.interfaceColor === 'dark'}/>
          <label htmlFor="interface_dark">{T.translate('settings.interface_dark')}</label>

          <p>
            {T.translate('settings.language')}
            <select onChange={this.changeLanguage} defaultValue={this.props.SettingsStore.language}>
              <option value="en">{T.translate('languages.en')}</option>
              <option value="pt-BR">{T.translate('languages.pt-BR')}</option>
              <option value="fr">{T.translate('languages.fr')}</option>
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
