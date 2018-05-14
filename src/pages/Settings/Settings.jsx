import './Settings.styl'
import React, { Component } from 'react'
import T from 'i18n-react'
import { observer, inject } from 'mobx-react'
import { Language } from './components/Language/Language.jsx'
import { Color } from './components/Color/Color.jsx'
import { CtrlEnter } from './components/CtrlEnter/CtrlEnter.jsx'
import { Username } from './components/Username/Username.jsx'
import { SettingsService } from './SettingsService.js'

@inject('SettingsStore')
@observer
export class Settings extends Component {
  inputUsername = React.createRef()

  changeUserName = event => {
    SettingsService(event.currentTarget.value)
  }

  resetDefault = event => {
    event.preventDefault()

    this.props.SettingsStore.resetDefault()
    SettingsService.setLanguage()
    this.props.changeLocale(this.props.SettingsStore.language)
    this.inputUsername.value = this.props.SettingsStore.username
  }

  render () {
    return (
      <form className="settings__form">
        <fieldset>
          <Username username={input => (this.inputUsername = input)}/>

          <Color locale={this.props.locale}/>

          <CtrlEnter locale={this.props.locale}/>

          <Language changeLocale={this.props.changeLocale}/>

          <button
            className="settings__button"
            onClick={this.resetDefault}
          >
            {T.translate('settings.reset')}
          </button>
        </fieldset>
      </form>
    )
  }
}
