// @flow
import { observable, action } from 'mobx'

class Settings {
  defaultValues = {
    username: `guest${Math.floor(Math.random() * Math.floor(999999))}`,
    interfaceColor: 'light',
    clockDisplay: 12,
    sounds: true,
    sendCtrlEnter: false,
    language: 'en'
  }

  interfaceColorsOptions = ['light', 'dark']

  @observable username = localStorage.getItem('username') || this.defaultValues.username
  @observable language = localStorage.getItem('language') || this.defaultValues.language
  @observable interfaceColor = localStorage.getItem('interfaceColor') || this.defaultValues.interfaceColor
  @observable sendCtrlEnter = (localStorage.getItem('sendCtrlEnter') === 'true') || this.defaultValues.sendCtrlEnter
  @observable clockDisplay = 12
  @observable sounds = true

  @action
  setLanguage (language: ?string) {
    const resetLanguage = language || this.defaultValues.language
    localStorage.setItem('language', resetLanguage)
    this.language = resetLanguage
  }

  @action
  setInterfaceColor (color: ?string) {
    const resetColor = color || this.defaultValues.interfaceColor
    localStorage.setItem('interfaceColor', resetColor)
    this.interfaceColor = resetColor
  }

  @action
  setUsername (name: ?string) {
    const resetName = name || this.defaultValues.username
    localStorage.setItem('username', resetName)
    this.username = resetName
  }

  @action
  setCtrlEnter (state: boolean) {
    this.sendCtrlEnter = state
    localStorage.setItem('sendCtrlEnter', state)
  }

  @action
  resetDefault () {
    this.setLanguage()
    this.setInterfaceColor()
    this.setUsername()
  }
}

export const SettingsStore = new Settings()
