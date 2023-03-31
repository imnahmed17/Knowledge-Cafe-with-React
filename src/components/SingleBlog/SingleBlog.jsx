import React from 'react';
import './SingleBlog.css';
import { BsBookmark } from 'react-icons/bs';

const SingleBlog = ({ blog, handleReadTime, handleBookmark }) => {
    let temp = 0;
    if (blog.readingTime >= 0 && blog.readingTime <= 9) {
        temp = 1;
    }

    return (
        <div className='blog-card mb-4'>
            <div className='blog-cover'>
                <img className='w-100 rounded' src={blog.coverPicture} alt="" />
            </div>
            <div className='my-3 d-flex justify-content-between'>
                <div className='author-info'>
                    <img className='me-3 rounded-circle' src={blog.authorPicture} alt="" />
                    <p className='lh-sm'>
                        <span className='fw-bold fs-5'>{blog.authorName}</span>
                        <br /> 
                        <small className='text-secondary'>{blog.publishDate}</small>
                    </p>
                </div>
                <div className='d-flex align-items-center'>
                    <p className='text-secondary me-2'>{temp == 0 ? blog.readingTime : '0' + blog.readingTime} min read</p>
                    <p onClick={() => handleBookmark(blog.id, blog.blogTitle, 1)}><BsBookmark /></p>
                </div>
            </div>
            <h2>{blog.blogTitle}</h2>
            <p className='text-secondary'>{blog.tags}</p>
            <a className='mark-read' onClick={() => handleReadTime(blog.readingTime)}>Mark as read</a>
        </div>
    );
};

export default SingleBlog;