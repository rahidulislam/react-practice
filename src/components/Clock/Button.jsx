import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const {change,local} = this.props
    return (
      <button type='button' onClick={()=>change(local)} > Click here </button>
    )
  }
}
