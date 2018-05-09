import { observable, action } from 'mobx'
import T from 'i18n-react'

class SettingsStore {
  @observable userName = 'User blablab'
  @observable interfaceColor = 'light'
  @observable clockDisplay = 12
  @observable sounds = true
  @observable sendCTRL = false
  @observable language = localStorage.getItem('language') || 'en'

  @action
  changeLanguage (language) {
    localStorage.setItem('language', language)
    this.language = language
    T.setTexts(require(`../../languages/${language}.json`))
  }
}

const store = new SettingsStore()

T.setTexts(require(`../../languages/${store.language}.json`))

export default store
