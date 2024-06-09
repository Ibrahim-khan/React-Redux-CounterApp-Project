import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter } from '../services/actions/CounterActions';

const Counter = () => {
   
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
      dispatch(incrementCounter());
    };

    const handleDecrement = () => {
      dispatch(decrementCounter());
    };

    const handleReset = () => {
      dispatch(resetCounter());
    };

  return (
    <div>
      <h2>Counter App</h2>

      <h3>Count : {count} </h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter;



// 1. state - count : 0
// 2. actions - increment, decrement, reset
// 3. educers - increment -> count => count + 1
// decrement -> count => count + 1
// reset -> count => 0
// 4. store 
// 5. providing store in react
// 6. 


// main.js -> App.js -> Counter.js
