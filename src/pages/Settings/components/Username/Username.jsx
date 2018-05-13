// @flow
import React, { Component } from 'react'
import T from 'i18n-react'
import { observer, inject } from 'mobx-react'

@inject('SettingsStore')
@observer
export class Username extends Component {
  changeUserName = event => {
    this.props.SettingsStore.changeUserName(event.target.value)
  }

  render () {
    return (
      <p>
        <label>
          {T.translate('settings.user_name')}
          <input
            type="text"
            ref="inputUserName"
            className="input"
            placeholder={this.props.SettingsStore.userName}
            defaultValue={this.props.SettingsStore.userName}
            onChange={this.changeUserName}
          />
        </label>
      </p>
    )
  }
}
