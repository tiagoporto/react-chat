// @flow
import React, { Component } from 'react'
import T from 'i18n-react'
import { observer, inject } from 'mobx-react'
import { ChatService } from './ChatService.js'
import { Messages } from './components/Messages/Messages.jsx'
import { Type } from './components/Type/Type.jsx'

@inject('ChatStore')
@observer
export class Chat extends Component {
  sendMessage = event => {
    event.preventDefault()

    if (event.target.message.value) {
      console.log('event.target.message.value', event.target.message.value)
      ChatService.sendMessage(event.target.message.value)
      event.target.reset()
    }
  }

  render () {
    return (
      <div>
        <p>
          {
            T.translate('chat.total_participants', {
              context: this.props.ChatStore.participants,
              participants: this.props.ChatStore.participants
            })
          }
        </p>

        <Messages />

        <form className="field has-addons" onSubmit={this.sendMessage}>
          <Type />

          <button type="submit" className="button is-primary">
            {T.translate('chat.send')}
          </button>
        </form>
      </div>
    )
  }
}
