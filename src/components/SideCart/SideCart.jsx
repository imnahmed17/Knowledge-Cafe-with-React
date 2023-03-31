import React, { useEffect, useState } from 'react';
import './SideCart.css';

const SideCart = ({ readTime }) => {
    

    return (
        <div className='side-cart'>
            <div className='time-spent rounded py-3'>
                <h6 className='fw-bold text-center'>Spent time on read: {readTime} min</h6>
            </div>
            <div className='bookmark-card p-3 my-3 rounded'>
                <p className='fw-bold'>Bookmarked Blogs: </p>
            </div>
        </div>
    );
};

export default SideCart;