import React, { Component } from 'react'
import hourglass from "../images/Hourglass.gif"

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={hourglass} alt="loading"/>
      </div>
    )
  }
}

export default Spinner
