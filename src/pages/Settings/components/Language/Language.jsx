// @flow
import React, { Component } from 'react'
import T from 'i18n-react'
import { observer, inject } from 'mobx-react'
import { SettingsService } from '../../SettingsService.js'

@inject('SettingsStore')
@observer
export class Language extends Component {
  changeLanguage = event => {
    SettingsService.changeLanguage(event.target.value)
    this.props.changeLocale(event.target.value)
  }

  render () {
    return (
      <div className="field">
        <label className="label">
          {T.translate('settings.language')}
        </label>

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
    )
  }
}
