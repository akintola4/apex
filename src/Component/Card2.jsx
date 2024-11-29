import PropTypes from 'prop-types';

function Card2({ info }) {
  return (
    <div 
      className="flex flex-col gap-4 h-full border hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-10 dark:hover:shadow-[rgba(247,240,_252,_0.1)_0px_0px_10px] rounded-lg" 
      data-aos="fade-right"
    >
      <img 
        src={`img/${info.img}`} 
        className="p-4 bg-btn-base-light rounded-xl opacity-50 dark:opacity-100 dark:bg-btn-base-dark w-2/12 md:w-3/12 xl:w-2/12" 
        alt={info.title} 
      />
      <h4 className="text-lg text-gray-950 dark:text-white font-bold font-sans">
        {info.title}
      </h4>
      <p className="font-bold text-gray-500 dark:text-white text-sm md:text-md">
        {info.description}
      </p>
    </div>
  );
}

Card2.propTypes = {
  info: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default Card2;
//is used PropTypes to stop the eslint errors
// Card2.propTypes ensures that the 'info' prop is an object with the required 
// 'img', 'title', and 'description' properties. This helps catch potential 
// errors early in development, making the code more reliable and maintainable.
// The 'isRequired' validator ensures that the 'img', 'title', and 'description' 
// properties within the 'info' prop are mandatory. This guarantees that the 
// component receives all the necessary data to render correctly.