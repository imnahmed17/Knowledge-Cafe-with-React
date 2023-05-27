import React, { useState } from 'react';
import './SingleBlog.css';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

const SingleBlog = ({ blog, handleReadTime, handleBookmark }) => {
    const [iconType, setIconType] = useState('BsBookmark');
    const [clickCount, setClickCount] = useState(0);

    let temp = 0;
    if (blog.readingTime >= 0 && blog.readingTime <= 9) {
        temp = 1;
    }

    const handleClick = () => {
        if (iconType === 'BsBookmark') {
            setIconType('BsBookmarkFill');
        } 
    };

    const handleMultipleFunctions = () => {
        handleBookmark(blog.blogTitle);
        handleClick();
    };

    const handleButtonClick = () => {
        handleReadTime(blog.readingTime);
        setClickCount(clickCount + 1);
    };

    return (
        <div className='blog-card mb-4'>
            <div className='blog-cover'>
                <img className='w-100 rounded' src={blog.coverPicture} alt="" />
            </div>
            <div className='author-container my-3 d-flex justify-content-between'>
                <div className='author-info d-flex align-items-center'>
                    <img className='me-3 rounded-circle' src={blog.authorPicture} alt="" />
                    <p className='lh-sm m-0'>
                        <span className='fw-bold fs-5'>{blog.authorName}</span>
                        <br /> 
                        <small className='text-secondary'>{blog.publishDate}</small>
                    </p>
                </div>
                <div className='bookmark-container d-flex align-items-center'>
                    <p className='text-secondary me-2 mb-0'>
                        {temp == 0 ? blog.readingTime : '0' + blog.readingTime} min read
                    </p>
                    <p className='mb-1 bookmark-icon' onClick={handleMultipleFunctions}>
                        {iconType === 'BsBookmark' ? <BsBookmark /> : <BsBookmarkFill />}
                    </p>
                </div>
            </div>
            <h2 className='fw-bold'>{blog.blogTitle}</h2>
            <p className='text-secondary'>{blog.tags}</p>
            <a className={clickCount > 0 ? "marked-read" : "mark-read"} onClick={handleButtonClick}>Mark as read</a>
        </div>
    );
};

export default SingleBlog;