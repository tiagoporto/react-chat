// @flow
import { observable, action } from 'mobx'

class Chat {
  /*
    {
     username: String
     message: String
    }
  */
  @observable messages = []
  @observable participants = 0
  @observable userTyping = []

  @action
  addMessage (message) {
    this.messages.push(message)
  }

  @action
  updateParticipants (participants) {
    this.participants = participants
  }

  @action
  updateTyping (participants) {
    this.participants = participants
  }
}

export const ChatStore = new Chat()
