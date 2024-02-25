import { useState } from 'react';
import './App.css';
import MyButton from './components/Button/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <MyButton onClick={() => setCount(count => count + 1)}>
          count is {count}
        </MyButton>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR updates.
        </p>
      </div>
    </>
  );
}

export default App;
