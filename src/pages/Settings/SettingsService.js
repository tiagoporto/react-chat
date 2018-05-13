import T from 'i18n-react'
import { SettingsStore } from './SettingsStore.js'

export class SettingsService {
  static setLanguage (language) {
    if (language) {
      SettingsStore.setLanguage(language)
      T.setTexts(require(`../../languages/${language}.json`))
    } else {
      const file = `${SettingsStore.language}.json`
      T.setTexts(require(`../../languages/${file}`))
    }
  }

  static setColor (color) {
    if (color) {
      document.body.classList.replace(`app--${SettingsStore.interfaceColor}`, `app--${color}`)
      SettingsStore.setInterfaceColor(color)
    } else {
      document.body.classList.add(`app--${SettingsStore.interfaceColor}`)
    }
  }
}
