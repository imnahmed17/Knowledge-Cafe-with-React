import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='header m-auto mb-3'>
        <Header></Header>
      </div>
    </div>
  )
}

export default App
