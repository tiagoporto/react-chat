import React, { Component } from 'react'
import T from 'i18n-react'
import { observer, inject } from 'mobx-react'
import { SettingsService } from '../../SettingsService.js'

@inject('SettingsStore')
@observer
export class Language extends Component {
  changeLanguage = event => {
    SettingsService.setLanguage(event.currentTarget.value)
    this.props.changeLocale(event.currentTarget.value)
  }

  render () {
    return (
      <p>
        <label className="label">
          <span>{T.translate('settings.language')}</span>

          <select
            onChange={this.changeLanguage}
            value={this.props.SettingsStore.language}
          >
            <option value="en">{T.translate('languages.en')}</option>
            <option value="pt-BR">{T.translate('languages.pt-BR')}</option>
            <option value="fr">{T.translate('languages.fr')}</option>
          </select>
        </label>
      </p>
    )
  }
}
