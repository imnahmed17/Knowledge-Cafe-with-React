import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';

function App() {
  const [readTime, setReadTime] = useState(0);

  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    } else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  }

  const handleBookmark = (id, title) => {
    // console.log(id, title)
    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    let bookmark = [];
    const item = { id, title};

    if (previousBookmark) {
        bookmark.push(...previousBookmark, item);
        localStorage.setItem("bookmark", JSON.stringify(bookmark));
        console.log(bookmark);
    } else {
        bookmark.push(item);
        localStorage.setItem("bookmark", JSON.stringify(bookmark));
    }
}

  return (
    <div>
      <div className='header m-auto mb-3'>
        <Header></Header>
      </div>
      <div className='main row'>
        <div className='home-container col-md-8'>
          <Home handleReadTime={handleReadTime} handleBookmark={handleBookmark}></Home>
        </div>
        <div className='side-cart col-md-4'>
          <SideCart readTime={readTime}></SideCart>
        </div>
      </div>
    </div>
  )
}

export default App
