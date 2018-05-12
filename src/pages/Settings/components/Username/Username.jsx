// @flow
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('SettingsStore')
@observer
export class Username extends Component {
  changeUserName = event => {
    this.props.SettingsStore.changeUserName(event.target.value)
  }

  render () {
    return (
      <input
        type="text"
        ref="inputUserName"
        className="input"
        placeholder={this.props.SettingsStore.userName}
        defaultValue={this.props.SettingsStore.userName}
        onChange={this.changeUserName}
      />
    )
  }
}
