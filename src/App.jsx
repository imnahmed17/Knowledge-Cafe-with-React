import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='header m-auto mb-3'>
        <Header></Header>
      </div>
      <div className='main row'>
        <div className='home-container col-md-9'>
          <Home></Home>
        </div>
        <div className='side-cart col-md-3'>
          <SideCart></SideCart>
        </div>
      </div>
    </div>
  )
}

export default App
