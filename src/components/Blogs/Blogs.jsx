import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmark, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className='w-2/3'>
            {/* <h1 className="text-4xl">Blogs</h1> */}
            <div className="mt-16">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleBookmark={handleBookmark}
                        handleReadingTime={handleReadingTime}>
                    </Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark:PropTypes.func,
    handleReadingTime:PropTypes.func
}

export default Blogs;