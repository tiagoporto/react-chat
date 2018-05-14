import React, { Component } from 'react'
import T from 'i18n-react'
import { observer, inject } from 'mobx-react'
import { SettingsService } from '../../SettingsService.js'

@inject('SettingsStore')
@observer
export class Color extends Component {
  changeInterfaceColor = event => {
    SettingsService.setColor(event.currentTarget.value)
  }

  render () {
    return (
      <p className="label">
        <span>{T.translate('settings.interface_color')}</span>
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
    )
  }
}
