import PropTypes from 'prop-types';

const BookMark = ({ bookmark }) => {
    const { title } = bookmark
    return (
        <div className="bg-white p-5 mb-5 rounded-lg">
            <h4 className="font text-lg font-semibold">{title}</h4>
        </div>
    );
};


BookMark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}

export default BookMark;