// @flow
import React, { Component } from 'react'

class Chat extends Component {
  render () {
    return (
      <form>
        {/* <textarea name="" id="" cols="30" rows="10" placeholder={T.translate('chat.enter_message')}></textarea> */}

        <button className="button is-primary is-large">
          {/* {T.translate('chat.send')} */}
        </button>
      </form>
    )
  }
}

export default Chat
