// @flow
import React, { Component } from 'react'
import Language from './componets/Language.jsx'

class Settings extends Component {
  render () {
    return (
      <form>
        <fieldset>
          <p>
            {/* <label htmlFor="user-name">{T.translate('settings.user_name')}</label> */}
            <input type="text" name="name" id="user-name" defaultValue="small"/>
          </p>
          <p>
            {/* {T.translate('settings.interface_color')} */}
          </p>

          <input type="radio" name="interface" id="interface-light" defaultValue="light"/>
          {/* <label htmlFor="interface-light">{T.translate('settings.interface_light')}</label> */}

          <input type="radio" name="interface" id="interface_dark" defaultValue="dark"/>
          {/* <label htmlFor="interface_dark">{T.translate('settings.interface_dark')}</label> */}

          <p>
            {/* {T.translate('settings.language')} */}
            <Language/>
          </p>

          <button className="button is-primary is-large">
            {/* {T.translate('settings.reset')} */}
          </button>
        </fieldset>
      </form>
    )
  }
}

export default Settings
