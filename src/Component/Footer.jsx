
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer id="footer" name="footer" className="pt-10 w-full flex-end bottom-0  " >
            <div className="relative">
                <div className="relative flex   flex-col gap-5 md:gap-10  ">
                    <div className="flex flex-col px-5 gap-5 md:gap-10 xl:gap-32 xl:justify-between  lg:flex-row ">
                        <div className="flex flex-col items-start justify-evenly  gap-6 lg:w-6/12  xl:w-4/12" >
                            <img src="/img/logo-purple.svg" className=" block dark:hidden " alt="" />
                            <img src="/img/logo-black.svg" className=" hidden dark:block invert" alt="" />
                            <p className="text-sm md:text-md  text-left">Join thousands of businesses and individuals who
                                trust Apex for their logistics needs and experience
                                the difference of efficient,dependable service.</p>
                            <form className="w-full flex flex-col justify-start gap-2 ">
                                <label className=" text-lg font-semibold xl:text-sm xl:font-medium text-gray-900 xl:ml-2">Subscribe to our newsletter</label>
                                    <div className="bg-gray-100 rounded-lg flex md:w-8/12 justify-between flex-row  md:gap-10 text-black p-2 px-4">
                                        <input type="text" placeholder="Enter email address" className=" w-8/12  md:w-full text-sm text-gray-900 active:ring-purple-500 outline-none   bg-transparent focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" />
                                        <button className="bg-btn-base-light text-white  dark:bg-btn-base-dark focus:ring-4 focus:outline-none focus:ring-purple-300 hover:bg-DarkprimaryColor font-medium rounded-lg text-sm px-6 py-2  dark:focus:ring-purple-800 ">Subscribe</button>
                                    </div>
                            </form>

                        </div>
                        <div className="grid  grid-cols-2 lg:grid-cols-3 xl:gird-cols-4 gap-5 md:gap-10 justify-around my-5 md:mx-10 lg:w-7/12 xl:w-5/12 lg:grid-rows-1">
                            <div className="flex flex-col gap-2  text-left justify-between">
                                <h4 className="font-bold text-lg ">Home</h4>
                                <div><button name="footer nav" id='footer Nav' className="text-md font-light "> About</button></div>
                                <div><button name="footer nav" id='footer Nav' className="text-md font-light ">Pricing</button></div>
                                <div><button name="footer nav" id='footer Nav' className="text-md font-light "> Services</button></div>
                            </div>
                            <div className="flex flex-col gap-2  text-left justify-between">
                                <h4 className="font-bold text-lg ">Resources</h4>
                                <div><button name="footer nav" id='footer Nav' className="text-md font-light "> FAQs </button></div>
                                <div><button name="footer nav" id='footer Nav' className="text-md font-light ">Blogs</button></div>
                                <div><button name="footer nav" id='footer Nav' className="text-md font-light ">Press
                                </button></div>
                                <div><button name="footer nav" id='footer Nav' className="text-md font-light "> Our Services </button></div>
                            </div>

                            <div className="flex flex-col gap-2  text-left ">
                                <h4 className="font-bold text-lg ">Company</h4>
                                <div><button name="footer nav" id='footer Nav' className="text-md font-light ">Careers</button></div>
                                <div><button name="footer nav" id='footer Nav' className="text-md font-light "> Partners</button></div>

                            </div>


                        </div>
                    </div>
                    <div className="flex flex-col items-center xl:items-start gap-4 xl:gap-0 lg:flex-row p-5  justify-between border-t-2 ">

                        <h4 className=" text-sm  text-left">©2024 apexlogistics. Allrights reserved by <a href="https://x.com/zionxi99?s=21">Ola</a>  and implemented by <a href="https://x.com/photofola">Dev Akintola</a></h4>

                        <div className="flex gap-5 flex-row ">
                            <button className="text-lg p-2 bg-primaryColor dark:bg-DarkprimaryColor rounded-full text-gray-50" name="socials" id="facebook"><FaFacebook /></button>
                            <button className="text-lg p-2 bg-primaryColor dark:bg-DarkprimaryColor rounded-full text-gray-50" name="socials" id="instagram"><FaInstagram /></button>
                            <button className="text-lg p-2 bg-primaryColor dark:bg-DarkprimaryColor rounded-full text-gray-50" name="socials" id="twitter"><FaXTwitter /></button>
                            <button className="text-lg p-2 bg-primaryColor dark:bg-DarkprimaryColor rounded-full text-gray-50" name="socials" id="Linkedin"><FaLinkedin /></button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
