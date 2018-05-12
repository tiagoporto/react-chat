// @flow
import React, { Component } from 'react'
import T from 'i18n-react'
import { observer, inject } from 'mobx-react'
import { ChatService } from './ChatService.js'

@inject('ChatStore')
@observer
class Chat extends Component {
  componentDidUpdate = () => {
    setTimeout(() => {
      this.refs.content.scrollTop = this.refs.content.scrollHeight
    }, 100)
  }

  sendMessage = event => {
    event.preventDefault()

    if (event.target.message.value) {
      ChatService.sendMessage(event.target.message.value)
      event.target.reset()
    }
  }

  isTyping = event => {
    if (event.target.value) {
      ChatService.isTyping()
    } else {
      ChatService.stopTyping()
    }
  }

  render () {
    const linkRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/
    const youtubeRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/
    const imgRegex = /(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*\.(?:jpg|jpeg|gif|png|svg))(?:\?([^#]*))?(?:#(.*))?/

    return (
      <div>
        <p>{T.translate('chat.total_participants', {context: this.props.ChatStore.participants, participants: this.props.ChatStore.participants})}</p>
        <div style={{overflow: 'scroll', maxHeight: '300px'}} ref='content'>
          <ul>
            {this.props.ChatStore.messages.map((message, index) => {
              if (message.message.match(youtubeRegex)) {
                return <li key={`message${index}`}>{message.username} - <iframe src={`https://www.youtube.com/embed/${youtubeRegex.exec(message.message)[5]}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Youtube video"></iframe></li>
              } else if (message.message.match(imgRegex)) {
                return <li key={`message${index}`}>{message.username} - <img src={message.message} alt={`Sent by ${message.username}`}/></li>
              } else if (message.message.match(linkRegex)) {
                return <li key={`message${index}`}>{message.username} - <a href={`${message.message}`} target="_blank" rel="noopener noreferrer">{message.message}</a></li>
              } else {
                return <li key={`message${index}`}><p>{message.username} - {message.message}</p></li>
              }
            })}
          </ul>
        </div>
        <form className="field has-addons" onSubmit={this.sendMessage}>
          <div className="control is-expanded">
            <input className="input" name="message" placeholder={T.translate('chat.enter_message')} onChange={this.isTyping} />
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
