import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);

    return (
        <div>
            <h1>this is home</h1>
            <div className="blog-container row">
                {
                    blogs.map(blog => <SingleBlog 
                        key={blog.id} 
                        blog={blog}
                    ></SingleBlog>)
                }
            </div>
        </div>
    );
};

export default Home;