import PropTypes from 'prop-types';
import ReadOnlyStarRating from './Star';

function ReviewCard({ review }) {
  return (
    <div className="flex flex-col gap-4 bg-gray-50 dark:bg-gray-800 dark:border-transparent  border hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 dark:hover:shadow-[rgba(247,240,_252,_0.1)_0px_0px_10px] rounded-lg">
      <div className='flex flex-row justify-between'>
      <ReadOnlyStarRating rating={review.star}/>
      <h4 className="  text-xs md:text-sm font-semibold dark:text-gray-50 text-gray-800">{review.time} days</h4>
      </div>
     
      <p className="font-light text-gray-900 text-sm dark:text-gray-100 md:text-md ">{review.description} </p>

      <div className='flex flex-row items-center justify-between'>
        <div className='gap-4 flex items-center flex-rwo'>
        <img  src={`img/${review.img}`} className=" " alt="" />
        <div className='flex flex-col gap-1'>
        <h4 className="  text-sm md:text-xl font-semibold dark:text-gray-50 text-gray-850">{review.name}</h4>
        <h4 className="  text-xs font-normal md:font-semibold dark:text-gray-50 text-gray-800">{review.job}</h4>
        </div>
        </div>
        <img src="img/quote.svg" className=' opacity-70 dark:invert' alt="" />
      </div>
    
    </div>

  );
}

ReviewCard.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    star:PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default ReviewCard;
//is used PropTypes to stop the eslint errors
// Card2.propTypes ensures that the 'review' prop is an object with the required 
// 'img', 'name', and 'description' properties. This helps catch potential 
// errors early in development, making the code more reliable and maintainable.
// The 'isRequired' validator ensures that the 'img', 'name', and 'description' 
// properties within the 'review' prop are mandatory. This guarantees that the 
// component receives all the necessary data to render correctly.

