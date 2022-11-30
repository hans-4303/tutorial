import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { numAction } from './redux/actions/numAction';

import logo from './logo.svg';
import './App.css';

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);

  const num = useSelector((state) => state.num.num);
  const dispatch = useDispatch();

  const increase = () => {
    counter += 1;
    console.log(counter);

    setCounter2(counter2 + 1);
    console.log(counter2);
  }

  const toolkitIncrease = () => {
    dispatch(numAction.increase());
  }

  const toolkitDecrease = () => {
    dispatch(numAction.decrease());
  }

  const toolkitDelete = () => {
    dispatch(numAction.deleteNum());
  }

  return (
    <div className="App">
      <>
        <h1>{counter}</h1>
        <h1>{counter2}</h1>
        <button onClick={increase}>증가하길 바라</button>
        <hr></hr>
        <h1>redux-toolkit</h1>
        <h1>{num ? num : ""}</h1>
        <button onClick={toolkitIncrease}>툴킷 실험, 증가</button>
        <button onClick={toolkitDecrease}>툴킷 실험, 감소</button>
        <button onClick={toolkitDelete}>num을 지워볼까?</button>
      </>
    </div>
  );
}

export default App;
