import React, { Component } from 'react'

export default class ClassBox extends Component {

  /* 생성자, 생성할 때 쓰이는 함수 */
  constructor(props) {
    super(props);

    /* this.state 안에서 원하는 state를 정의할 수 있다. */
    this.state = {
      counter: 0,
      num: 1,
      value: 0
    };
  }

  /* 클래스형 컴포넌트에서도 화살표 함수를 쓰지만, function은 붙이지 않는다. */
  increase = () => {
    /* this.setState는 클래스형 컴포넌트에서
    state에 대한 setter로 쓸 수 있는 함수 */

    /* 인수는 리터럴 객체 형태를 가지며, 원하는 state를 조정해줄 수 있다.
    이때, this.state와 원하는 state 값을 차례로 접근해야 한다.
    
    선언과 동시에 초기화 하는 방식으로는 다룰 수 없으며,
    state를 호출하고 다른 값을 대입한다. */

    this.setState({counter: this.state.counter + 1, value: this.state.value + 1})
  }

  render() {
    return (
      <div>
        <div>state: {this.state.counter}</div>
        <button onClick={this.increase}>Click Here</button>
      </div>
    )
  }
}
