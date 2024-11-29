import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

function Fqa({ fqa }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex flex-col gap-6 border-2 dark:border-DarkprimaryColor p-4 rounded-xl">
      <div className="flex flex-row justify-between gap-2 items-center cursor-pointer"  onClick={toggleOpen} >
        <h4 className="text-md font-light dark:text-gray-50 text-gray-950">
          {fqa.title}
        </h4>
        <button name="FQA toggle" id='FQA toggle'>
          <FaPlus />
        </button>
      </div>
      {isOpen && (
        <p className="font-bold text-gray-500 text-sm dark:text-gray-100 md:text-md delay-200 duration-300 ease-out">
          {fqa.description}
        </p>
      )}
    </div>
  );
}

Fqa.propTypes = {
  fqa: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default Fqa;