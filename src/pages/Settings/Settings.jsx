// @flow
import React, { Component } from 'react'
import T from 'i18n-react'
import { observer, inject } from 'mobx-react'
import { Language } from './components/Language/Language.jsx'
import { Color } from './components/Color/Color.jsx'
import { Username } from './components/Username/Username.jsx'
import { SettingsService } from './SettingsService.js'

@inject('SettingsStore')
@observer
export class Settings extends Component {
  changeUserName = event => {
    SettingsService(event.target.value)
  }

  resetDefault = event => {
    event.preventDefault()
    this.props.SettingsStore.resetDefault()
    this.props.changeLocale(this.props.SettingsStore.language)
    this.refs.inputUserName.value = this.props.SettingsStore.userName
  }

  render () {
    return (
      <form>
        <fieldset>
          <p>
            <label>
              {T.translate('settings.user_name')}
              <Username />
            </label>
          </p>

          <p>
            {T.translate('settings.interface_color')}
          </p>

          <div className="control">
            <Color />
          </div>

          <div className="field">
            <label className="label">
              {T.translate('settings.language')}
            </label>

            <div className="control">
              <div className="select">
                <Language changeLocale={this.props.changeLocale}/>
              </div>
            </div>
          </div>

          <button
            className="button is-large is-primary is-fullwidth"
            onClick={this.resetDefault}
          >
            {T.translate('settings.reset')}
          </button>
        </fieldset>
      </form>
    )
  }
}
