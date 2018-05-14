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
  @observable userTyping = ''
  @observable status = false

  @action
  addMessage (message: { [key:any]: any }) {
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

  @action
  updateUserTyping (username: ?string) {
    if (username) {
      this.userTyping = username
    } else {
      this.userTyping = ''
    }
  }

  @action
  setStatus (status: boolean) {
    this.status = status
  }
}

export const ChatStore = new Chat()
