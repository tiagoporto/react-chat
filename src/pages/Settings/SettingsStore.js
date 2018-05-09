import { observable } from 'mobx'

class SettingsStore {
  @observable userName = ''
  @observable interfaceColor: 'light'
  @observable clockDisplay = 12
  @observable sounds = true
  @observable sendCTRL = false
  @observable language = 'en'
}

const store = new SettingsStore()

export default store
