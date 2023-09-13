import PropTypes from 'prop-types';
import profile from './../../assets/images/profile.png'

const Blog = ({ blog }) => {
    console.log(blog)
    const { title, author, author_img, cover, hashtags, posted_date, reading_time } = blog
    return (
        <section className='mt-16'>
            <div>
                <img className="w-[700px] h-[400px]" src={cover} alt="" />
                <div className='flex justify-between'>
                    <div className='flex gap-5 items-center my-5'>
                        <div>
                            <img src={profile} alt="" />
                        </div>
                        <div>
                            <p className='font-semibold'>{author}</p>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div>
                        <p>{reading_time} minute read</p>
                    </div>
                </div>
                <h1 className='font-bold text-2xl'>{title}</h1>
                {
                    hashtags.map((hastag, index)=><span key={index}> <a href="">#{hastag}</a></span>)
                }
            </div>
        </section>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;