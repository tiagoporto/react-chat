// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Language extends Component {
  changeLanguage = event => {
    this.props.dispatch({ type: 'CHANGE_LANGUAGE', value: event.target.value })
  }

  render () {
    return (
      <select defaultValue={this.props.language} onChange={this.changeLanguage}>
        <option value="en">{'languages.en'}</option>
        <option value="pt-BR">{'languages.pt-BR'}</option>
        <option value="fr">{'languages.fr'}</option>
      </select>
    )
  }
}

const mapStateToProps = state => ({
  language: state.language
})

export default connect(mapStateToProps)(Language)
