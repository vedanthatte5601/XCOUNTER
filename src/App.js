import {useState} from 'react';
function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <p>Count: {count}</p>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={incrementCount}>Increment</button>
      </div>
    </div>
  );
}

export default App;