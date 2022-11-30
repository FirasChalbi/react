import React , {useState} from 'react';
import "./styles.css";

function Counter() {
    const [Count , setCount] = useState(0);
  return (
    <div>
    <h1>{Count}</h1>
    <div className='button-wrapper'>
        <button onClick={() => setCount(Count + 1)}>+</button>
        <button onClick={() => setCount(Count - 1)}>-</button>
    </div>
    </div>
  )
}

export default Counter;