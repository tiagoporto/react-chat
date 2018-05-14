import React, { Component } from 'react'
import T from 'i18n-react'
import { observer, inject } from 'mobx-react'

@inject('SettingsStore')
@observer
export class CtrlEnter extends Component {
  changeCtrlEnter = event => {
    this.props.SettingsStore.setCtrlEnter(event.currentTarget.value === 'true')
  }

  render () {
    return (

      <p className="label">
        <span>{T.translate('settings.send_ctrl')}</span>
        {[true, false].map((state, index) => {
          return (
            <label className="radio" key={index}>
              <input
                type="radio"
                name="ctrlEnter"
                value={state}
                checked={this.props.SettingsStore.sendCtrlEnter === state}
                onChange={this.changeCtrlEnter}
              />
              {state ? T.translate('settings.on') : T.translate('settings.off')}
            </label>
          )
        })}
      </p>
    )
  }
}
