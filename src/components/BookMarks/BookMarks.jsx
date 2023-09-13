import BookMark from "../BookMark/BookMark";
import PropTypes from 'prop-types';

const BookMarks = ({ bookmarks }) => {
    return (
        <div className='w-1/3 mt-[77px]'>

            <div className="bg-[#1111110C] ml-7 pb-3 rounded-lg">
                <h2 className="text-2xl text-center font-bold pt-6 font">BookMarked Blogs : {bookmarks.length}</h2>
                <div className="m-7">
                    {
                        bookmarks.map(bookmark => <BookMark key={bookmark.div} bookmark={bookmark}></BookMark>)
                    }
                </div>
            </div>

        </div>

    );
};


BookMarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
}

export default BookMarks;