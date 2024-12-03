
import Nav from "./Nav";
import Hero from "./Hero";
//for the core component card type
import ValueCard from "./ValueCard.jsx";
import workdata from "./work";
//for the join us card type
import RiderCard from "./RiderCard.jsx";
import riderData from "./rider";

//for the services us card type
import ServiceCard from "../assets/ServiceCard.jsx";
import servicesData from "./services";


// //for the services us card type
import ReviewCard from "./ReviewCard";
import reviewData from "./review";

// //for the questions us card type
import FqaCard from "./Fqa.jsx";
import fqaData from "./fqa.js";


import Footer from "./Footer";
import Sub from "./Sub";
import MovingDiv from "./MovingDiv";


//for aos
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, [])
    const values = workdata.map(info => (
        <ValueCard
            key={info.id}
            info={info}
        />
    ));
    const rider = riderData.map(rider => (
        <RiderCard
            key={rider.id}
            rider={rider}
        />
    ));
    const service = servicesData.map(service => (
        <ServiceCard
            key={service.id}
            service={service}
        />
    ));
    const reviews = reviewData.map(review => (
        <ReviewCard
            key={review.id}
            review={review}
        />
    ));
   const fqaCard = fqaData.map(fqa => (
        <FqaCard
            key={fqa.id}
            fqa={fqa}
        />
    )); 
    const brandLogos = [
        "brand-logo-1.svg",
        "brand-logo-2.svg",
        "brand-logo-3.svg",
        "brand-logo-4.svg",
        "brand-logo-5.svg",
        "brand-logo-6.svg",
        "brand-logo-7.svg"
    ];
    return (
        <div className="scroll-smooth flex flex-col gap-10">
            <Nav />
            <Hero />

            <section className="flex flex-col text-center md:tex-start md:flex-row  items-center justify-between gap-5 md:gap-10 xl:gap-48 px-5 md:px-10 xl:mx-auto" data-aos="fade-right">
                <div className="flex flex-col gap-4">
                    <h4 className=" text-gray-950 md:text-3xl font-semibold dark:text-white  text-2xl"> 10,000+</h4>
                    <p className=" text-gray-400 text-sm  dark:text-gray-300"> Successful deliveries completed</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className=" text-gray-950 md:text-3xl font-semibold dark:text-white  text-2xl"> 98%</h4>
                    <p className=" text-gray-400 text-sm  dark:text-gray-300">  On-time delivery rate,</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className=" text-gray-950 md:text-3xl font-semibold dark:text-white  text-2xl"> 7,000+</h4>
                    <p className=" text-gray-400 text-sm  dark:text-gray-300">  Satisfied clients,</p>
                </div>


            </section>
            <section id="values" name="values" className=" flex flex-col gap-10  dark:bg-gray-800 dark:text-white px-5 xl:px-10 items-center py-10" data-aos="fade-right">
                <div className="flex flex-col text-center gap-2">
                    <p className="  mx-auto text-primaryColor dark:text-DarkprimaryColor text-sm border-primaryColor  dark:border-DarkprimaryColor border p-2">Core Commmitments</p>
                    <h4 className=" text-gray-950 md:text-3xl font-bold dark:text-white  text-2xl">Values that define us</h4>
                    <p className=" text-gray-400 mx-auto dark:text-gray-300">Our values are the foundation of everything we do</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-evenly gap-5 md:gap-10 xl:gap-20 xl:w-10/12 ">
                    {values}
                </div>
            </section>
            <section id="about" name="about" className=" flex flex-col lg:flex-row py-10 xl:gap-32 px-5 justify-between items-center  xl:mx-32" data-aos="zoom-in" >
                <img src="img/hero-3.svg" className="xl:w-8/12 scale-100 md:scale-125 lg:scale-90 my-10 dark:invert-0" alt="" />

                <div className="flex flex-col  xl:w-6/12 gap-6 md:gap-12 md:my-10">
                    <div className="flex flex-col gap-4 md:gap-6" data-aos="fade-left">
                        <p className="  text-primaryColor dark:text-DarkprimaryColor w-6/12 md:w-2/12 lg:w-6/12 text-center text-sm border-primaryColor dark:border-DarkprimaryColor border p-2">About Us</p>
                        <h4 className=" text-gray-950 md:text-3xl font-bold dark:text-white  text-2xl">Apex Logistics </h4>

                    </div>
                    <div className="flex flex-col gap-6" data-aos="fade-left">
                        <p className=" text-gray-950 font-light text-md  dark:text-gray-300 ">At Apex Logistics, we are dedicated to redefining logistics
                            solutions with efficiency, reliability, and innovation.
                            Specializing in end-to-end supply chain management, we
                            deliver a seamless experience with a global reach, serving
                            businesses of all sizes. </p>
                        <p className=" text-gray-950 font-light text-md  dark:text-gray-300 ">
                            From real-time tracking to flexible delivery options, our
                            services are designed to keep pace with the
                            needs of a dynamic world. Our 24/7 support team
                            is committed to ensuring that each delivery reaches its
                            destination safely and on time. </p>
                    </div>

                    <button name="learn" id='learn' className='px-3 py-2 w-8/12 md:w-3/12 bg-primaryColor dark:bg-DarkprimaryColor hover:bg-gray-100 border-transparent hover:border-primaryColor  hover:text-primaryColor  dark:text-gray-50 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:hover:border-DarkprimaryColor border    transition ease-in-out  delay-150 duration-300 text-white rounded-lg' data-aos="fade-left">See more</button>


                </div>


            </section>
            <section id="quote" name="quote" className="xl:mx-32 lg:mx-20 p-5 md:p-10 bg-[#E5E4F2] dark:bg-btn-base-dark rounded-xl flex flex-col gap-10 items-center" data-aos="fade-right">
                <div className="flex flex-col text-center gap-2">
                    {/* <p className="  mx-auto text-primaryColor dark:text-DarkprimaryColor text-sm border-primaryColor  dark:border-DarkprimaryColor border p-2">Core Partners</p> */}
                    <h4 className=" text-gray-950 md:text-3xl font-semibold dark:text-white  text-2xl">Delivery Cost Estimator</h4>
                    <p className=" text-gray-500 mx-auto font-light dark:text-gray-300">Get an instant delivery cost estimate by entering the details below</p>
                </div>

                <form className="flex flex-col gap-4 md:w-10/12  xl:w-6/12">
                    <div className="flex flex-row w-full gap-10 items-center xl:gap-32">
                        <div className="flex w-6/12 flex-col">
                            <div className="mb-5 w-full">
                                <label htmlFor="text" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Enter pickup location</label>
                                <input type="text" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primaryColor focus:border-primaryColor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryColor dark:focus:border-primaryColor" placeholder="E.g City or State." required />
                            </div>
                            <div className="mb-5 w-full">
                                <label htmlFor="text" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Package Weight</label>
                                <input type="text" id="weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primaryColor focus:border-primaryColor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryColor dark:focus:border-primaryColor" placeholder="E.g ., 5 lbs or 2.3 kg" required />
                            </div>
                        </div>
                        <div className="flex w-6/12 flex-col">
                            <div className="mb-5 w-full">
                                <label htmlFor="text" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Enter delivery destination</label>
                                <input type="text" id="destination" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primaryColor focus:border-primaryColor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryColor dark:focus:border-primaryColor" placeholder="E.g City or State." required />
                            </div>
                            <div className="mb-5 w-full">
                                <label htmlFor="text" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Delivery Speed</label>
                                <input type="text" id="speed" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-primaryColor focus:border-primaryColor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryColor dark:focus:border-primaryColor" placeholder="Select speed option" required />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="handling" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primaryColor dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primaryColor dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="handling" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Do you need special handling?</label>
                    </div>
                    <button name="quote form"  id='quote form' type="submit" className='px-3 py-2 font-light w-full bg-primaryColor dark:bg-DarkprimaryColor hover:bg-gray-100 border-transparent hover:border-primaryColor  hover:text-primaryColor  dark:text-gray-50 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:hover:border-DarkprimaryColor border    transition ease-in-out  delay-150 duration-300 text-white rounded-lg'>Get Quotation</button>
                </form>

            </section>

            <section id="brand" name="brand" className="flex flex-col gap-6" >
                <div className="flex flex-col text-center gap-2" data-aos="fade-right">
                    <p className="  mx-auto text-primaryColor dark:text-DarkprimaryColor text-sm border-primaryColor  dark:border-DarkprimaryColor border p-2">Core Partners</p>
                    <h4 className=" text-gray-950 md:text-3xl font-bold dark:text-white  text-2xl">Our partners</h4>
                    {/* <p className=" text-gray-400 mx-auto dark:text-gray-300">Our values are the foundation of everything we do</p> */}
                </div>
                <MovingDiv>
                    <section
                        id='brand-logos'
                        className='brand-logos 
      grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-7
      justify-center items-center 
      gap-8 sm:gap-10 md:gap-12 px-5
      p-4 md:px-10 lg:px-20'
                    >
                        {brandLogos.map((logo, index) => (
                            <img
                                key={index}
                                src={`img/${logo}`}
                                className='
          w-full 
          max-w-[100px] 
          sm:max-w-[120px] 
          md:max-w-none 
          scale-125 sm:scale-100 
          xl:w-auto'
                                alt={`brand-logo-${index + 1}`}
                            />
                        ))}
                    </section>
                </MovingDiv>
            </section>
            <section id="services" name="services" className=" flex flex-col lg:flex-row items-start py-10 gap-10 px-5    xl:px-32 bg-[#7F7CAF] dark:bg-btn-base-dark" data-aos="fade-right" >
                <div className="flex flex-col text-white justify-evenly">
                    <div className="flex flex-col gap-4">
                        <p className="  text-gray-50 dark:text-gray-50 w-6/12 md:w-3/12 lg:w-6/12 text-center text-sm border-gray-50 dark:border-gray-5text-gray-50 border p-2">Our Services</p>
                        <h4 className="  md:text-3xl font-bold dark:text-white  text-2xl">Why choose us</h4>
                        <p className="  text-sm md:w-8/12 lg:w-11/12 xl:w-6/12  dark:text-gray-300">Our team is here to make delivery
                            simple, convenient, and reliable, no
                            app required.</p>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 xl:w-7/12">
                    {service}
                </div>

            </section>

            <section id="rider" name="rider" className=" flex flex-col lg:flex-row py-10 gap-10 mx-5 md:mx-10  xl:mx-32" data-aos="zoom-in" >
                <div className="flex flex-col gap-10 justify-evenly">
                    <div className="flex flex-col gap-4 xl:gap-2">
                        <p className="  text-primaryColor dark:text-DarkprimaryColor w-6/12 xl:w-2/12 text-center text-sm border-primaryColor dark:border-DarkprimaryColor border p-2">Join Us</p>
                        <h4 className=" text-gray-950 md:text-3xl font-bold dark:text-white  text-2xl">Become a rider</h4>
                        <p className=" text-gray-400 text-sm  dark:text-gray-300">Here are four steps to becoming a rider with Apex</p>
                    </div>
                    <div className="flex flex-col xl:w-8/12 justify-between gap-10" data-aos="fade-right">
                        {rider}
                    </div>
                    <button  name="join" id='Join' className='px-3 py-2 md:w-3/12 lg:w-8/12 bg-primaryColor dark:bg-DarkprimaryColor hover:bg-gray-100 border-transparent hover:border-primaryColor  hover:text-primaryColor  dark:text-gray-50 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:hover:border-DarkprimaryColor border    transition ease-in-out  delay-150 duration-300 text-white rounded-lg'>Join team</button>


                </div>

                <img src="img/hero-2.svg" className="xl:w-8/12 scale-100 lg:scale-90 my-10 dark:invert-0" alt="" />

            </section>
            <section id="reviews" name="reviews" className=" flex flex-col items-start py-10 gap-10 px-5    xl:px-32 bg-[#7F7CAF] dark:bg-btn-base-dark"  >
                <div className="flex flex-col text-white justify-evenly">
                    <div className="flex flex-col gap-4">
                        <p className="  text-gray-50 dark:text-gray-50 w-6/12 text-center text-sm border-gray-50 dark:border-gray-5text-gray-50 border p-2">Testimonials</p>
                        <h4 className="  md:text-3xl font-bold dark:text-white  text-2xl">What our clients say</h4>
                        {/* <p className="  text-sm w-6/12  dark:text-gray-300">Our team is here to make delivery
                            simple, convenient, and reliable, no
                            app required.</p> */}
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {reviews}
                </div>

            </section>
            <section id="faqs" name="faqs" className=" flex flex-col h-full  lg:flex-row items-start py-10 lg:py-20 gap-10 px-5    xl:px-32 " data-aos="fade-right" >
                <div className="flex flex-col justify-evenly">
                    <div className="flex flex-col gap-6 xl:gap-4">
                        <p className="  text-primaryColor dark:text-gray-50 w-6/12 md:w-3/12 lg:w-2`/12 text-center text-sm border-primaryColor dark:border-DarkprimaryColor border p-2">FAQs</p>
                        <h4 className="  md:text-3xl font-bold dark:text-white xl:w-6/12  text-2xl">Got any question?
                            We’ve got answers</h4>
                        <p className="  text-sm lg:w-10/12 xl:w-6/12 text-gray-600 dark:text-gray-300">Find answers to common questions about our services
                            from tracking and delivery options to billing and support. </p>
                    </div>

                </div>

                <div className="grid grid-cols-1 gap-10 w-full xl:w-7/12">
                    {fqaCard}
                </div>

            </section>
            <Sub />
            <Footer />
        </div>
    )
}

