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
      console.log('you have been disconnected')
    })

    socket.on('typing', data => {
      console.log('typing', data)
    })

    socket.on('stop typing', data => {
      console.log('stop typing', data)
    })

    socket.on('login', data => {
      console.log('login', data)
      ChatService.updateParticipants(data.numUsers)
    })

    socket.on('user joined', data => {
      ChatService.updateParticipants(data.numUsers)
      console.log('joined', data)
    })

    socket.on('user left', data => {
      ChatService.updateParticipants(data.numUsers)
    })

    socket.on('new message', data => {
      console.log('new message', data)
      ChatService.receiveMessage(data)
    })
  }

  static sendMessage (message) {
    socket.emit('new message', message)
    ChatStore.addMessage({
      username: SettingsStore.userName,
      message: message
    })
  }

  static receiveMessage (message) {
    ChatStore.addMessage(message)
  }

  static addUser (username) {
    socket.emit('add user', SettingsStore.userName)
  }

  static updateParticipants (totalParticipants) {
    ChatStore.updateParticipants(totalParticipants)
  }
}

ChatService.init()
