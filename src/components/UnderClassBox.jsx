/* 상위 페이지나 컴포넌트에서 num을 props로 받았다 가정 */

import React, { Component } from 'react'

export default class UnderClassBox extends Component {
  render() {
    return (
      <div>
        {this.props.num}
      </div>
    )
  }
}