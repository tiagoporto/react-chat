// @flow
import React, { Component } from 'react'
import T from 'i18n-react'
import io from 'socket.io-client'

// var socket = io('http://185.13.90.140:8081/')
var socket = io('https://socket-io-chat.now.sh/')

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

socket.emit('new message', 'iuyiu')

class Chat extends Component {
  render () {
    return (
      <div>
        <div className="textarea"></div>

        <form className="field has-addons">
          <div className="control is-expanded">
            <input className="input" placeholder={T.translate('chat.enter_message')} />
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
