// @flow
import { observable, action } from 'mobx'

class Settings {
  defaultValues = {
    userName: `guest${Math.floor(Math.random() * Math.floor(999999))}`,
    interfaceColor: 'light',
    clockDisplay: 12,
    sounds: true,
    sendCTRL: false,
    language: 'en'
  }

  interfaceColorsOptions = ['light', 'dark']

  @observable userName = localStorage.getItem('userName') || this.defaultValues.userName
  @observable language = localStorage.getItem('language') || this.defaultValues.language
  @observable interfaceColor = localStorage.getItem('interfaceColor') || this.defaultValues.interfaceColor
  @observable clockDisplay = 12
  @observable sounds = true
  @observable sendCTRL = false

  @action
  changeLanguage (language) {
    const resetLanguage = language || this.defaultValues.language
    localStorage.setItem('language', resetLanguage)
    this.language = resetLanguage
  }

  @action
  changeInterfaceColor (color) {
    const resetColor = color || this.defaultValues.interfaceColor
    localStorage.setItem('interfaceColor', resetColor)
    this.interfaceColor = resetColor
  }

  @action
  changeUserName (name) {
    const resetName = name || this.defaultValues.userName
    localStorage.setItem('userName', resetName)
    this.userName = resetName
  }

  @action
  resetDefault () {
    this.changeLanguage()
    this.changeInterfaceColor()
    this.changeUserName()
  }
}

export const SettingsStore = new Settings()
