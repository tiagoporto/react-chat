import React, { Component } from 'react'
import T from 'i18n-react'
import { observer, inject } from 'mobx-react'
import { ChatService } from './ChatService.js'
import { Messages } from './components/Messages/Messages.jsx'
import { Type } from './components/Type/Type.jsx'

@inject('ChatStore')
@observer
export class Chat extends Component {
  static defaultProps = {
    ChatStore: null
  }

  sendMessage = event => {
    event.preventDefault()

    if (event.currentTarget.message.value) {
      ChatService.sendMessage(event.currentTarget.message.value)
      event.currentTarget.reset()
    }
  }

  render () {
    return ([
      <p key="participants">
        {
          T.translate('chat.total_participants', {
            context: this.props.ChatStore.participants,
            participants: this.props.ChatStore.participants
          })
        }
      </p>,

      <Messages key="messages" />,

      <form
        className="field has-addons"
        onSubmit={this.sendMessage}
        key="submitForm"
      >
        <Type />

        <button type="submit" className="button is-primary">
          {T.translate('chat.send')}
        </button>
      </form>
    ])
  }
}
