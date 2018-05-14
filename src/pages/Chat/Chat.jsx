import './Chat.styl'
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
      <div
        className="info-bar"
        key="participants"
      >
        <p className="info-bar__participants">
          {
            T.translate('chat.total_participants', {
              context: this.props.ChatStore.participants,
              participants: this.props.ChatStore.participants
            })
          }
        </p>

        <p className={`info-bar__status ${this.props.ChatStore.status ? 'info-bar__status--on' : 'info-bar__status--off'}`}>
          {this.props.ChatStore.status ? T.translate('chat.online') : T.translate('chat.offline')}
        </p>
      </div>,

      <Messages key="messages" />,

      <div key="typing">
        <p className="typing">
          {this.props.ChatStore.userTyping &&
            T.translate('chat.is_typing', {
              username: this.props.ChatStore.userTyping
            })
          }
        </p>

        <Type />
      </div>

    ])
  }
}
