import PropTypes from 'prop-types';
import profile from './../../assets/images/profile.png'
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog }) => {
    console.log(blog)
    const { title, author, cover, hashtags, posted_date, reading_time } = blog
    return (
        <section className='mb-16'>
            <div>
                <img className="w-full h-[470px] rounded-lg" src={cover} alt="" />
                <div className='flex justify-between items-center'>
                    <div className='flex gap-5 items-center my-6'>
                        <div>
                            <img src={profile} alt="" />
                        </div>
                        <div>
                            <p className='font-semibold'>{author}</p>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                    <span>{reading_time} min read </span>
                    <button className=' text-red-500 text-xl'><FaBookmark></FaBookmark></button>
                    </div>
                </div>
                <h1 className='font-bold text-2xl mb-4'>{title}</h1>
                <div className='flex gap-3'>
                {
                    hashtags.map((hastag, index)=><span key={index}> <a href="">#{hastag}</a></span>)
                }
                </div>
            </div>
        </section>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;