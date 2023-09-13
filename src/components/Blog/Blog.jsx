import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    console.log(blog)
    const { title, author, author_img, cover, hashtags, posted_date, reading_time } = blog
    return (
        <div>
            <h1>{title}</h1>
            <img className="w-[700px] h-[400px]" src={cover} alt="" />
            <h1>{cover}</h1>


        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired
}

export default Blog;