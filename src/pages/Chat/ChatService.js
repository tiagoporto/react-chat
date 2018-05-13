// @flow
import { ChatStore } from './ChatStore.jsx'
import { SettingsStore } from '../Settings/SettingsStore.js'
import io from 'socket.io-client'

const socket = io('https://socket-io-chat.now.sh/')

export class ChatService {
  static init () {
    this.addUser()

    socket.on('connect', () => {
      console.log('connect')
    })

    socket.on('disconnect', () => {
      console.log('You have been disconnected')
    })

    // socket.on('typing', data => {
    //   console.log('typing', data)
    // })

    // socket.on('stop typing', data => {
    //   console.log('stop typing', data)
    // })

    socket.on('login', data => ChatService.updateParticipants(data.numUsers))

    socket.on('user joined', data => ChatService.updateParticipants(data.numUsers))

    socket.on('user left', data => ChatService.updateParticipants(data.numUsers))

    socket.on('new message', data => ChatService.receiveMessage(data))
  }

  static sendMessage (message: string) {
    socket.emit('new message', message)
    ChatStore.addMessage({
      username: SettingsStore.userName,
      message: message
    })
  }

  static receiveMessage (message: { [key:any]: string }) {
    console.log('message', message)
    ChatStore.addMessage(message)
  }

  static isTyping () {
    socket.emit('typing')
  }

  static stopTyping () {
    socket.emit('stop typing')
  }

  static addUser (username: ?string) {
    socket.emit('add user', SettingsStore.userName)
  }

  static updateParticipants (totalParticipants: number) {
    ChatStore.updateParticipants(totalParticipants)
  }
}

ChatService.init()
