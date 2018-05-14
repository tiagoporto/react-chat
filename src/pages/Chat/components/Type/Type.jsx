import './Type.styl'
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { ChatService } from '../../ChatService.js'
import T from 'i18n-react'

@inject('ChatStore', 'SettingsStore')
@observer
export class Type extends Component {
  sendMessage = event => {
    event.preventDefault()

    if (event.currentTarget.message.value) {
      ChatService.sendMessage(event.currentTarget.message.value)
      event.currentTarget.reset()
    }
  }

  interceptKeyUp = event => {
    if (this.props.SettingsStore.sendCtrlEnter && event.keyCode === 13 && event.ctrlKey) {
      this.refs.submit.click()
    }
  }

  isTyping = event => {
    if (event.currentTarget.value) {
      ChatService.isTyping()
    } else {
      ChatService.stopTyping()
    }
  }

  render () {
    return (
      <form
        className="messages-box__form"
        onSubmit={this.sendMessage}
      >
        <textarea
          className="messages-box__input"
          name="message"
          placeholder={T.translate('chat.enter_message')}
          onChange={this.isTyping}
          onKeyDown={this.interceptKeyUp}
          autoFocus
        >
        </textarea>

        <button
          type="submit"
          className="messages-box__button"
          ref="submit"
        >
          {T.translate('chat.send')}
        </button>
      </form>
    )
  }
}
