import React, { Component } from 'react'
import gifFile from '../loadingImg.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={gifFile}  alt="newsGhost"  width='50px' />
      </div>
    )
  }
}
