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

  changeInterfaceColor = event => {
    this.props.SettingsStore.changeInterfaceColor(event.target.value)
  }

  changeUserName = event => {
    this.props.SettingsStore.changeUserName(event.target.value)
  }

  resetDefault = event => {
    event.preventDefault()
    this.props.SettingsStore.resetDefault()
    this.props.changeAppLanguage(this.props.SettingsStore.language)
    this.refs.inputUserName.value = this.props.SettingsStore.userName
  }

  render () {
    return (
      <form>
        <fieldset>
          <p>
            <label>
              {T.translate('settings.user_name')}
              <input
                type="text"
                ref="inputUserName"
                className="input"
                placeholder={this.props.SettingsStore.userName}
                defaultValue={this.props.SettingsStore.userName}
                onChange={this.changeUserName}
              />
            </label>
          </p>

          <p>
            {T.translate('settings.interface_color')}
          </p>

          <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="interface"
                value="light"
                checked={this.props.SettingsStore.interfaceColor === 'light'}
                onChange={this.changeInterfaceColor}
              />
              {T.translate('settings.interface_light')}
            </label>

            <label className="radio">
              <input
                type="radio"
                name="interface"
                value="dark"
                checked={this.props.SettingsStore.interfaceColor === 'dark'}
                onChange={this.changeInterfaceColor}
              />
              {T.translate('settings.interface_dark')}
            </label>
          </div>

          <div className="field">
            <label className="label">{T.translate('settings.language')}</label>
            <div className="control">
              <div className="select">
                <select
                  onChange={this.changeLanguage}
                  value={this.props.SettingsStore.language}
                >
                  <option value="en">{T.translate('languages.en')}</option>
                  <option value="pt-BR">{T.translate('languages.pt-BR')}</option>
                  <option value="fr">{T.translate('languages.fr')}</option>
                </select>
              </div>
            </div>
          </div>

          <button className="button is-large is-primary is-fullwidth" onClick={this.resetDefault}>
            {T.translate('settings.reset')}
          </button>
        </fieldset>
      </form>
    )
  }
}

export default Settings
