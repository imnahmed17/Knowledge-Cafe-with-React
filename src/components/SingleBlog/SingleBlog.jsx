import React from 'react';
import './SingleBlog.css';

const SingleBlog = ({ blog }) => {
    // console.log(blog);
    let temp = 0;
    if (blog.readingTime >= 0 && blog.readingTime <= 9) {
        temp = 1;
    }

    return (
        <div className='blog-card mb-4'>
            <div className='blog-cover'>
                <img className='w-100 rounded' src={blog.coverPicture} alt="" />
            </div>
            <div className='my-4 d-flex justify-content-between'>
                <div className='author-info d-flex align-items-center'>
                    <img className='me-3 rounded-circle' src={blog.authorPicture} alt="" />
                    <div>
                        <p className='lh-sm'>
                            <span className='fw-bold fs-5'>{blog.authorName}</span>
                            <br /> 
                            <small className='text-secondary'>{blog.publishDate}</small>
                        </p>
                    </div>
                </div>
                <div>
                    <p className='text-secondary'>{temp == 0 ? blog.readingTime : '0' + blog.readingTime} min read</p>
                </div>
            </div>
            <h2>{blog.blogTitle}</h2>
            <p className='text-secondary'>{blog.tags}</p>
            <a href="">Mark as read</a>
        </div>
    );
};

export default SingleBlog;