import React, { Component } from 'react'

export default class Container extends Component {
  render() {
    return (
        <div className='flex flex-col flex-wrap items-center justify-evenly sm:flex-row'>
        {this.props.children}
        </div>
    )
  }
}
