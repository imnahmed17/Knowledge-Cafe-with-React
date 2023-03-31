import React, { useEffect, useState } from 'react';
import './SideCart.css';

const SideCart = ({ readTime, bookmarkTime }) => {
    const [time, setTime] = useState(readTime);
    const [count, setCount] = useState(bookmarkTime);

    useEffect(() => {
        const getReadTimeFromStorage = localStorage.getItem("readTime");
        if (getReadTimeFromStorage) {
            setTime(getReadTimeFromStorage);
        } else {
            setTime(readTime);
        }
    }, [readTime]);

    useEffect(() => {
        const getBookmarkedTimeFromStorage = localStorage.getItem("bookmarkTime");
        if (getBookmarkedTimeFromStorage) {
            setCount(getBookmarkedTimeFromStorage);
        } else {
            setCount(bookmarkTime);
        }
    }, [bookmarkTime]);

    return (
        <div className='side-cart'>
            <div className='time-spent rounded py-3'>
                <h6 className='fw-bold text-center'>Spent time on read: {time} min</h6>
            </div>
            <div className='bookmark-card p-3 my-3 rounded'>
                <p className='fw-bold'>Bookmarked Blogs: {count}</p>
            </div>
        </div>
    );
};

export default SideCart;