// @flow
import React, { Component } from 'react'
import T from 'i18n-react'
import { observer, inject } from 'mobx-react'

@inject('SettingsStore')
@observer
export class Color extends Component {
  changeInterfaceColor = event => {
    this.props.SettingsStore.changeInterfaceColor(event.target.value)
  }

  render () {
    return ([
      <p key="label">{T.translate('settings.interface_color')}</p>,

      <p key="select">
        {this.props.SettingsStore.interfaceColorsOptions.map((color, index) => {
          return (
            <label className="radio" key={index}>
              <input
                type="radio"
                name="interface"
                value={color}
                checked={this.props.SettingsStore.interfaceColor === color}
                onChange={this.changeInterfaceColor}
              />
              {T.translate(`settings.interface_${color}`)}
            </label>
          )
        })}
      </p>
    ])
  }
}
