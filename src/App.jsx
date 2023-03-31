import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [readTime, setReadTime] = useState(0);
  const [bookmarkInfo, setBookmarkInfo] = useState([]);

  useEffect(() => {
    const previousBookmark = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarkInfo(previousBookmark);
  }, []);

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

  const handleBookmark = (title) => {
    const previousBookmark = JSON.parse(localStorage.getItem("bookmarks"));
    
    if (previousBookmark && previousBookmark.includes(title)) {
      toast("Already bookmarked!");
    }

    localStorage.setItem("bookmarks", JSON.stringify([...bookmarkInfo, title]));
    setBookmarkInfo([...bookmarkInfo, title]);
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
          <SideCart readTime={readTime} bookmarkInfo={bookmarkInfo}></SideCart>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App;
