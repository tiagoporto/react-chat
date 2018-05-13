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
    SettingsService(event.currentTarget.value)
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
          <Username />

          <Color locale={this.props.locale}/>

          <Language changeLocale={this.props.changeLocale}/>

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
