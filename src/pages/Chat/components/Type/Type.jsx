import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { ChatService } from '../../ChatService.js'
import T from 'i18n-react'

@inject('ChatStore')
@observer
export class Type extends Component {
  isTyping = event => {
    if (event.currentTarget.value) {
      ChatService.isTyping()
    } else {
      ChatService.stopTyping()
    }
  }

  render () {
    return (
      <input
        className="input"
        name="message"
        placeholder={T.translate('chat.enter_message')}
        onChange={this.isTyping}
      />
    )
  }
}
