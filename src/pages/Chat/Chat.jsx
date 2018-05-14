import React, { Component } from 'react'
import T from 'i18n-react'
import { observer, inject } from 'mobx-react'
import { Messages } from './components/Messages/Messages.jsx'
import { Type } from './components/Type/Type.jsx'

@inject('ChatStore')
@observer
export class Chat extends Component {
  static defaultProps = {
    ChatStore: null
  }

  render () {
    return ([
      <div key="participants">
        <p>
          {
            T.translate('chat.total_participants', {
              context: this.props.ChatStore.participants,
              participants: this.props.ChatStore.participants
            })
          }
        </p>

        <p>{this.props.ChatStore.status ? T.translate('chat.online') : T.translate('chat.offline')}</p>
      </div>,

      <Messages key="messages" />,

      <p key="typing">
        {this.props.ChatStore.userTyping &&
          T.translate('chat.is_typing', {
            username: this.props.ChatStore.userTyping
          })
        }
      </p>,

      <Type key="form" />
    ])
  }
}
