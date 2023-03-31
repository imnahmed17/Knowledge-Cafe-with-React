import React, { useEffect, useState } from 'react';
import './SideCart.css';

const SideCart = ({ readTime, bookmarkInfo }) => {
    const [time, setTime] = useState(readTime);

    useEffect(() => {
        const getReadTimeFromStorage = localStorage.getItem("readTime");
        if (getReadTimeFromStorage) {
            setTime(getReadTimeFromStorage);
        } else {
            setTime(readTime);
        }
    }, [readTime]);

    return (
        <div className='side-cart'>
            <div className='time-spent rounded py-3'>
                <h6 className='fw-bold text-center mb-0'>Spent time on read: {time} min</h6>
            </div>
            <div className='bookmark-card p-3 my-3 rounded'>
                <p className='fw-bold'>Bookmarked Blogs: {bookmarkInfo.length}</p>
                <div>
                    {
                        bookmarkInfo.map((item, index) => (
                            <div key={index} className='card mt-2'>
                                <small className='fw-bold'>{item}</small>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SideCart;