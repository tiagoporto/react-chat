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
  addMessage (message: { [key:any]: string }) {
    this.messages.push(message)
  }

  @action
  updateParticipants (participants: number) {
    this.participants = participants
  }

  @action
  updateTyping (participants: number) {
    this.participants = participants
  }
}

export const ChatStore = new Chat()
