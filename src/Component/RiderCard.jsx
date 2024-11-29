import PropTypes from 'prop-types';

function RiderCard({ rider }) {
  return (
    <div className="flex flex-row gap-6">
      <div className='flex flex-col '>
      <p className="md:font-bold font-normal  text-sm p-2 px-4  text-center bg-primaryColor dark:bg-DarkprimaryColor text-gray-50 rounded-full md:text-md ">{rider.id} </p>
      <span className='bg-transparent'></span>
      </div>
     
      <div className="flex flex-col w-full gap-2">
        <h4 className="  text-md md:text-xl font-semibold dark:text-gray-50 text-gray-950">{rider.title}</h4>
        <p className="font-bold text-gray-500 text-xs md:text-sm dark:text-gray-100 md:text-md ">{rider.description} </p>

      </div>
      </div>
      
      );
}

      RiderCard.propTypes = {
        rider: PropTypes.shape({
          id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
  }).isRequired
};

      export default RiderCard;
//is used PropTypes to stop the eslint errors
// RiderCard.propTypes ensures that the 'rider' prop is an object with the required 
// 'img', 'title', and 'description' properties. This helps catch potential 
// errors early in development, making the code more reliable and maintainable.
// The 'isRequired' validator ensures that the 'img', 'title', and 'description' 
// properties within the 'rider' prop are mandatory. This guarantees that the 
// component receives all the necessary data to render correctly.