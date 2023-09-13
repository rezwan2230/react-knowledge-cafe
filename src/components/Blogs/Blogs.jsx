import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className='w-2/3'>
            <h1 className="text-4xl">Blogs</h1>
            <div className="mt-10">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}>
                    </Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;