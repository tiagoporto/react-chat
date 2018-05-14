import './Messages.styl'
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('ChatStore')
@observer
export class Messages extends Component {
  componentDidUpdate = () => {
    setTimeout(() => {
      this.refs.content.scrollTop = this.refs.content.scrollHeight
    }, 100)
  }

  parseMessage = item => {
    const message = item.message.trim()

    const pattern = {
      link: /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/,
      youtube: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/,
      image: /(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*\.(?:jpg|jpeg|gif|png|svg))(?:\?([^#]*))?(?:#(.*))?/
    }

    if (message.match(pattern.youtube)) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${pattern.youtube.exec(message)[5]}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen title="Youtube video"
        >
        </iframe>
      )
    } else if (message.match(pattern.image)) {
      return (
        <a href="{item.message}" target="_blank" rel="noopener noreferrer">
          <img src={message} alt={`Sent by ${item.username}`} height="200"/>
        </a>
      )
    } else if (message.match(pattern.link)) {
      return (
        <a href={`${message}`} target="_blank" rel="noopener noreferrer">{message}</a>
      )
    } else {
      return message
    }
  }

  render () {
    return (
      <div className="messages-box" ref='content'>
        <ul className="messages-box__list">
          {
            this.props.ChatStore.messages.map((item, index) => {
              return (
                <li className="messages-box__item" key={`message${index}`}>
                  <p className={item.mine && 'message--mine'}>
                    {item.time.toLocaleTimeString()}
                    {item.mine || `, ${item.username}`}<br/>
                    <span className="message">
                      {this.parseMessage(item)}
                    </span>
                  </p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
