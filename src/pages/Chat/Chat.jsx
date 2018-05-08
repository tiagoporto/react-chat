import React, { Component } from 'react'
import T from 'i18n-react'
// import './Chat.styl'

class Chat extends Component {
  render () {
    return (
      <div className="chat">
        <textarea name="" id="" cols="30" rows="10"></textarea>

        <button className="button is-primary is-large" onClick={this.changeLanguage}>{T.translate('send')}</button>
      </div>
    )
  }
}

export default Chat
