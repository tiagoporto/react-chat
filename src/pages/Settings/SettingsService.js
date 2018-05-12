// @flow
import T from 'i18n-react'
import { SettingsStore } from './SettingsStore.js'

export class SettingsService {
  static setLanguage () {
    const file = `${SettingsStore.language}.json`
    T.setTexts(require(`../../languages/${file}`))
  }

  static changeLanguage (language) {
    SettingsStore.changeLanguage(language)
    T.setTexts(require(`../../languages/${language}.json`))
  }
}
