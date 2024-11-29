
import {  FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer id="footer" name="footer" className="pt-10 w-full flex-end bottom-0  " >
            <div className="relative">
                <div className="relative flex   flex-col gap-10  ">
                    <div className="flex flex-col px-5 gap-10 xl:gap-32 xl:justify-between  lg:flex-row ">
                        <div className="flex flex-col items-center justify-evenly lg:items-start gap-6 lg:w-6/12  xl:w-4/12" >
                            <img src="/img/logo-purple.svg" className=" block dark:hidden " alt="" />
                            <img src="/img/logo-black.svg" className=" hidden dark:block invert" alt="" />
                            <p className="text-sm md:text-md text-center lg:text-left">Join thousands of businesses and individuals who
                                trust Apex for their logistics needs and experience
                                the difference of efficient,dependable service.</p>
                            <form className="w-full md:w-10/12 flex flex-col gap-2 ">
                            <label className=" text-sm font-medium text-gray-900 ml-2">Subscribe to our newsletter</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    </div>
                                    <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-2xl border border-gray-300  bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Enter email address" />
                                    <button type="submit" className=" absolute end-2.5 bottom-2.5 bg-btn-base-light text-white  dark:bg-btn-base-dark focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-2  dark:focus:ring-purple-800">Subscribe</button>
                                </div>
                            </form>

                        </div>
                        <div className="grid  grid-cols-2 lg:grid-cols-3 xl:gird-cols-4 gap-5 md:gap-10 justify-around my-5 md:mx-10 lg:w-7/12 xl:w-5/12 lg:grid-rows-1">
                            <ul className="flex flex-col gap-2  text-left justify-between">
                                <h4 className="font-bold text-lg ">Home</h4>
                                <li><button className="text-md font-light "> About</button></li>
                                <li><button className="text-md font-light ">Pricing</button></li>
                                <li><button className="text-md font-light "> Services</button></li>
                            </ul>
                            <ul className="flex flex-col gap-2  text-left justify-between">
                                <h4 className="font-bold text-lg ">Resources</h4>
                                <li><button className="text-md font-light "> FAQs </button></li>
                                <li><button className="text-md font-light ">Blogs</button></li>
                                <li><button className="text-md font-light ">Press
                                </button></li>
                                <li><button className="text-md font-light "> Our Services </button></li>
                            </ul>

                            <ul className="flex flex-col gap-2  text-left ">
                                <h4 className="font-bold text-lg ">Company</h4>
                                <li><button className="text-md font-light ">Careers</button></li>
                                <li><button className="text-md font-light "> Partners</button></li>

                            </ul>


                        </div>
                    </div>
                    <div className="flex flex-col items-center xl:items-start gap-4 xl:gap-0 lg:flex-row p-5  justify-between border-t-2 ">

                        <h4 className=" text-sm text-center lg:text-left">©2024 apexlogistics. Allrights reserved by <a href="https://x.com/zionxi99?s=21">Ola</a>  and implemented by <a href="https://x.com/photofola">Dev Akintola</a></h4>

                        <div className="flex gap-5 flex-row ">
                            <button className="text-lg p-2 bg-primaryColor dark:bg-DarkprimaryColor rounded-full text-gray-50"><FaFacebook /></button>
                            <button className="text-lg p-2 bg-primaryColor dark:bg-DarkprimaryColor rounded-full text-gray-50"><FaInstagram /></button>
                            <button className="text-lg p-2 bg-primaryColor dark:bg-DarkprimaryColor rounded-full text-gray-50"><FaXTwitter /></button>
                            <button className="text-lg p-2 bg-primaryColor dark:bg-DarkprimaryColor rounded-full text-gray-50"><FaLinkedin /></button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
