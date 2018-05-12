import { observable, action } from 'mobx'

class Chat {
  @observable messages = []
  @observable participants = 0

  @action
  addMessage (message) {
    this.messages.push({
      user: 'teste do teste',
      text: message
    })
  }
}

export const ChatStore = new Chat()
