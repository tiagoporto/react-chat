// @flow
import { ChatStore } from './ChatStore.jsx'
import { SettingsStore } from '../Settings/SettingsStore.js'
import io from 'socket.io-client'

const socket = io('https://socket-io-chat.now.sh/')

export class ChatService {
  static init () {
    this.addUser()

    socket
      .on('connect', () => ChatStore.setStatus(true))
      .on('disconnect', () => ChatStore.setStatus(false))
      .on('typing', data => ChatStore.updateUserTyping(data.username))
      .on('stop typing', data => ChatStore.updateUserTyping())
      .on('login', data => ChatService.updateParticipants(data.numUsers))
      .on('user joined', data => ChatService.updateParticipants(data.numUsers))
      .on('user left', data => ChatService.updateParticipants(data.numUsers))
      .on('new message', data => ChatService.receiveMessage(data))
  }

  static sendMessage (message: string) {
    // There is a problem in callback
    socket.emit('new message', message)

    ChatStore.addMessage({
      username: SettingsStore.username,
      message: message,
      time: new Date(),
      mine: true
    })
  }

  static receiveMessage (message: { [key:string]: string }) {
    ChatStore.addMessage({
      ...message,
      time: new Date()
    })
  }

  static isTyping () {
    socket.emit('typing')
  }

  static stopTyping () {
    socket.emit('stop typing')
  }

  static addUser (username: ?string) {
    socket.emit('add user', SettingsStore.username)
  }

  static updateParticipants (totalParticipants: number) {
    ChatStore.updateParticipants(totalParticipants)
  }
}

ChatService.init()
