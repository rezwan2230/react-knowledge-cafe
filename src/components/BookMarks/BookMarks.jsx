import BookMark from "../BookMark/BookMark";
import PropTypes from 'prop-types';

const BookMarks = ({ bookmarks, readingTime }) => {
    // console.log(bookmarks)
    return (
        <div className='w-1/3 mt-[65px] ml-6'>


            <div className="bg-[#3C47EC19] text-[#6047EC] rounded-lg text-[22px] text-center font-semibold p-5 mb-5">
                <h1>Spent time on read : {readingTime} min</h1>
            </div>

            <div className="bg-[#1111110C] pb-2 rounded-lg">
                <h2 className="text-[22px] text-center font-semibold pt-6 font">BookMarked Blogs : {bookmarks.length}</h2>
                <div className="m-7">
                    {
                        bookmarks.map(bookmark => <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>)
                    }
                </div>
            </div>

        </div>

    );
};


BookMarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.object.isRequired,
}

export default BookMarks;