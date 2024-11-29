import { useState } from 'react';
import PropTypes from 'prop-types';
const ReadOnlyStarRating = ({ rating }) => {
   
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span 
          key={index}
          className={`text-orange-400 text-xl  md:text-2xl ${index + 1 <= (hoveredRating || rating) ? 'filled' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          &#9733; {/* Unicode character for a star */}
        </span>
      ))}
    </div>
  );
};



ReadOnlyStarRating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default ReadOnlyStarRating;
//is used PropTypes to stop the eslint errors 
// The 'isRequired' validator ensures that the 'img', 'title', and 'description' 
// properties within the 'review' prop are mandatory. This guarantees that the 
// component receives all the necessary data to render correctly.
