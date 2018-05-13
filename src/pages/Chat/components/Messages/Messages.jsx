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
    const pattern = {
      link: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/,
      youtube: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/,
      image: /(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*\.(?:jpg|jpeg|gif|png|svg))(?:\?([^#]*))?(?:#(.*))?/
    }

    if (item.message.match(pattern.youtube)) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${pattern.youtube.exec(item.message)[5]}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen title="Youtube video"
        >
        </iframe>
      )
    } else if (item.message.match(pattern.image)) {
      return <img src={item.message} alt={`Sent by ${item.username}`}/>
    } else if (item.message.match(pattern.link)) {
      return <a href={`${item.message}`} target="_blank" rel="noopener noreferrer">{item.message}</a>
    } else {
      return item.message
    }
  }

  render () {
    return (
      <div ref='content'>
        <ul>
          {
            this.props.ChatStore.messages.map((item, index) => {
              return (
                <li key={`message${index}`}>
                  <p style={item.mine && {textAlign: 'right'}}>
                    {item.time.toLocaleTimeString()}
                    <span>
                      {item.mine || `, ${item.username}`} {this.parseMessage(item)}
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
