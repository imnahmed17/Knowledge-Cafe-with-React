import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Home = ({ handleReadTime }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div>
            <div className="blog-container row">
                {
                    blogs.map(blog => <SingleBlog 
                        key={blog.id} 
                        blog={blog}
                        handleReadTime={handleReadTime}
                    ></SingleBlog>)
                }
            </div>
        </div>
    );
};

export default Home;