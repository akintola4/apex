
import { Link } from 'react-router-dom'

import DarkSwitcher from "./DarkSwitcher"
import { RxHamburgerMenu } from 'react-icons/rx'
import { useEffect, useState } from 'react';


export default function Nav() {

    // now we create a toogle menu for the navabr 

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

//for up and down scrolling not only hero section
    const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // Assumes hero section is full viewport height
      const currentScrollY = window.scrollY;

      // Hide navbar after scrolling past hero section
      setIsVisible(currentScrollY < heroHeight);

      // Optional: Add smooth hide/show based on scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

    // const [isVisible, setIsVisible] = useState(true);

    // useEffect(() => {
    //   const handleScroll = () => {
    //     const heroSection = document.getElementById('hero');
    //     if (!heroSection) return;
  
    //     const heroBottom = heroSection.getBoundingClientRect().bottom;
        
    //     // Show navbar only when hero section is in view
    //     setIsVisible(heroBottom > 0);
    //   };
  
    //   // Add scroll event listener
    //   window.addEventListener('scroll', handleScroll);
  
    //   // Cleanup listener
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);
  

    return (
        <header
        className={`
           fixed inset-x-0 top-0 md:px-4 xl:px-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  z-10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-none dark:bg-gray-950  dark:text-white   text-white w-12/12
            transition-transform duration-300 
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}
          `}
         >

            <nav className="flex items-center p-3 bg-white md:bg-transparent text-black md:text-white justify-between" aria-label="Global">
                <Link to="/" className="flex flex-row lg:items-center lg:justify-center gap-2 w-4/12  lg:w-2/12">

                    <img src="/img/logo-light.svg" className="w-8/12 md:block hidden md:w-6/12" alt="comapny logo" />
                    <img src="/img/logo-black.svg" className="w-6/12 md:hidden block md:w-6/12" alt="comapny logo" />
                </Link>
                <div className=" flex-row items-center hidden lg:gap-10 xl:gap-20   rounded-lg py-2 px-3 justify-center  lg:flex ">
                    <div className="relative text-md  w-fit block hover:text-primaryColor after:block after:content-[''] after:absolute after:h-[2px] after:bg-primaryColor after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                        <Link to="/" className="flex flex-row gap-2 items-center">
                            Home
                        </Link>
                    </div>
                    <div className="relative text-md  w-fit block hover:text-primaryColor after:block after:content-[''] after:absolute after:h-[2px] after:bg-primaryColor after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                    <a
                            href="#about" // Use the section ID
                            className="flex hover:text-primaryColor flex-row gap-2 items-center"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('about')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                             about
                        </a>
                        </div>

                    <div className="relative text-md  w-fit block hover:text-primaryColor after:block after:content-[''] after:absolute after:h-[2px] after:bg-primaryColor after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                    <a
                            href="#services" // Use the section ID
                            className="flex hover:text-primaryColor flex-row gap-2 items-center"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('services')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                             services
                        </a>
                    </div>
                    <div className="relative text-md  w-fit block hover:text-primaryColor after:block after:content-[''] after:absolute after:h-[2px] after:bg-primaryColor after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                    <a
                            href="#footer" // Use the section ID
                            className="flex hover:text-primaryColor flex-row gap-2 items-center"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('footer')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                             contact
                        </a></div>
                    <div className="relative text-md  w-fit block hover:text-primaryColor after:block after:content-[''] after:absolute after:h-[2px] after:bg-primaryColor after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                    <a
                            href="#faqs" // Use the section ID
                            className="flex hover:text-primaryColor flex-row gap-2 items-center"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('faqs')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                             FAQS
                        </a>
                        </div>
                  
                </div>

                <div className="nav-3  xl:w-2/12 flex items-end justify-end">
                    <div className=" flex-row hidden gap-3 lg:flex items-center ">
                        <button  name="get started" id='get started' className='px-4 py-2 bg-primaryColor hover:bg-DarkprimaryColor border border-transparent hover:border-primaryColor hover:text-btnbg-primaryColor dark:bg-btn-base-dark dark:text-gray-50 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:hover:border-btn-base-dark    transition ease-in-out  delay-150 duration-300 text-white rounded-lg'>Get started</button>

                       
                        {/* <DarkSwitcher /> */}
                    </div>
                    <button
                        className="flex p-2 rounded-md text-white dark:text-white outline-none cursor-pointer mobile-menu-button lg:hidden hover:bg-none hover:text-white" onClick={toggleMenu}>
                        <RxHamburgerMenu className="text-2xl text-black md:text-white" /></button>
                        
                </div>

            </nav>
            <div className={`lg:hidden mobile-menu bg-white md:bg-transparent text-black   ${isOpen ? "" : "hidden "}`}>
                <div className="gap-20 mx-auto">
                    <div className="px-5 py-2 transition duration-300 dark:text-white">
                        <Link to="/" className="flex flex-row gap-2 items-center">
                            Home
                        </Link>
                    </div>
                    <div className="px-5 py-2 transition duration-300 dark:text-white">
                        <Link to="/about" className="flex flex-row gap-2 items-center">
                            About us
                        </Link>
                    </div>

                    <div className="px-5 py-2 transition duration-300 dark:text-white">
                        <Link className="flex flex-row gap-2 items-center"
                            to="/Services">
                            Services
                        </Link></div>
                        
                    <div className="px-5 py-2 transition duration-300 dark:text-white">
                        <Link className="flex flex-row gap-2 items-center"
                            to="/contact">
                            Contact
                        </Link></div>
                        <div className="px-5 py-2 transition duration-300 dark:text-white">
                        <Link className="flex flex-row gap-2 items-center"
                            to="/FAQs">
                            FAQs
                        </Link></div>
                        <div className="px-5 py-2 transition duration-300 dark:text-white">
                       
                        <div className=" flex-row pt-2 md:pt-none  gap-4 flex items-center ">
                        <button  name="get started" id='get started' className='px-4 py-2 bg-primaryColor hover:bg-DarkprimaryColor border border-transparent hover:border-primaryColor hover:text-btnbg-primaryColor dark:bg-btn-base-dark dark:text-gray-50 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:hover:border-btn-base-dark    transition ease-in-out  delay-150 duration-300 text-white rounded-lg'>Get started</button>

{/*                        
                        <DarkSwitcher /> */}
                    </div>
                    </div>

                </div>
            </div>
            <div>

            </div>
        </header>
    )
}
