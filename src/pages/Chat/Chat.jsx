// @flow
import React, { Component } from 'react'
import T from 'i18n-react'
import { observer, inject } from 'mobx-react'
import io from 'socket.io-client'

// var socket = io('http://185.13.90.140:8081/')
const socket = io('https://socket-io-chat.now.sh/')

socket.on('connect', () => {
  console.log('connect')
})

socket.on('new message', data => {
  console.log('mensagem', data)
})

socket.on('typing', data => {
  console.log('typing', data)
})

socket.on('stop typing', data => {
  console.log('stop typing', data)
})

socket.on('login', data => {
  console.log('login', data)
})

socket.on('user joined', data => {
  console.log('join', data)
})

socket.on('user left', data => {
  console.log('left', data)
})

socket.on('disconnect', () => {
  console.log('you have been disconnected')
})
socket.emit('add user', 'metal')

@inject('ChatStore')
@observer
class Chat extends Component {
  sendMessage = event => {
    event.preventDefault()
    socket.emit('new message', event.target.message.value)
    this.props.ChatStore.addMessage(event.target.message.value)
  }

  render () {
    return (
      <div>
        <p>{T.translate('chat.total_participants', {context: this.props.ChatStore.participants, participants: this.props.ChatStore.participants})}</p>
        <div className="textarea">
          <ul>
            {this.props.ChatStore.messages.map((message, index) =>
              <li key={`message${index}`}>{index}{message.user} - {message.text}</li>
            )}
          </ul>
        </div>
        <form className="field has-addons" onSubmit={this.sendMessage}>
          <div className="control is-expanded">
            <input className="input" name="message" placeholder={T.translate('chat.enter_message')} />
          </div>
          <div className="control">
            <button className="button is-primary">
              {T.translate('chat.send')}
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Chat
