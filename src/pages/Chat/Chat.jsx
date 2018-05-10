// @flow
import React, { Component } from 'react'
import T from 'i18n-react'

class Chat extends Component {
  render () {
    return ([
      <div className="textarea"></div>,

      <form class="field has-addons">
        <div class="control is-expanded">
          <input className="input" placeholder={T.translate('chat.enter_message')} />
        </div>
        <div class="control">
          <button className="button is-primary">
            {T.translate('chat.send')}
          </button>
        </div>
      </form>
    ])
  }
}

export default Chat
