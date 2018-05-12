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

  @action
  addMessage (message) {
    console.log('message', message)
    this.messages.push(message)
  }

  @action
  updateParticipants (participants) {
    this.participants = participants
  }
}

export const ChatStore = new Chat()
