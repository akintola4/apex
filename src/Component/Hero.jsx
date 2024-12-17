

export default function Hero() {

    return (


        <div>
            <div id="hero" className="w-full hidden md:block relative text-white bg-no-repeat bg-auto md:bg-cover h-screen z-0 overflow-hidden bg-[url('/img/webp/hero-bg.webp')]" data-aos="zoom-in">
                <div className="relative px-5 top-0 left-0 w-full h-full z-10 bg-black/50 flex items-center justify-center flex-col gap-5 ">
                    <div className="flex flex-col gap-4 md:gap-4 items-start  md:items-center  md:text-center">
                        <h4 className="font-extrabold lg:text-6xl md:text-5xl text-2xl md:w-11/12 w-full xl:w-8/12 ">The Logistics Company you
                            can trust to Deliver</h4>
                        <p className="font-light text-sm md:text-lg md:w-8/12 lg:w-8/12 xl:w-6/12 text-gray-200 dark:text-gray-300">Welcome to Apex Logistics,your reliable partner for fast, flexible delivery. Track in real-time and enjoy 24/7 support with every shipment.</p>
                    </div>

                    <form className="w-full md:py-2 md:w-8/12 xl:w-5/12">
                    <div className="bg-gray-100 rounded-lg flex md:max-w-md md:mx-auto w-full md:w-8/12 justify-between flex-row dark:bg-gray-700 dark:border-gray-600  md:gap-10 text-black p-2 px-4">
                        <input type="text" placeholder="Enter tracking number" className="bg-transparent w-8/12 md:w-full outline-none text-sm text-gray-900   bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" />
                        <button className="bg-btn-base-light text-white  dark:bg-btn-base-dark focus:ring-4  focus:outline-none focus:ring-purple-300 hover:bg-purple-500 font-medium rounded-lg text-sm px-6 py-2  dark:focus:ring-purple-800 ">Track</button>
                        </div>
                    </form>

                </div>
            </div>
            <div id="hero" className=" md:hidden block relative text-white bg-repeat  bg-fixed h-screen z-0 overflow-hidden bg-[url('/img/hero-bg-mobile.svg')]" data-aos="zoom-in">
                <div className="relative px-5 top-0 left-0 w-full h-full z-10 bg-black/50 flex items-center justify-center flex-col gap-5 ">
                    <div className="flex flex-col gap-4 md:gap-4 items-center  text-center">
                        <h4 className="font-extrabold lg:text-6xl md:text-5xl text-2xl md:w-11/12 w-full xl:w-8/12 ">The Logistics Company you
                            can trust to Deliver</h4>
                        <p className="font-light text-sm md:text-lg md:w-8/12 lg:w-8/12 xl:w-6/12 text-gray-200 dark:text-gray-300">Welcome to Apex Logistics,your reliable partner for fast, flexible delivery. Track in real-time and enjoy 24/7 support with every shipment.</p>
                    </div>


                        <div className="bg-gray-100 rounded-lg flex md:max-w-md md:mx-auto w-full md:w-8/12 justify-between flex-row  md:gap-10 text-black p-2 px-4">
                        <input type="text" placeholder="Enter tracking number" className="bg-transparent w-8/12 md:w-full text-sm text-gray-900   bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" />
                        <button className="bg-btn-base-light text-white  dark:bg-btn-base-dark focus:ring-4 focus:outline-none focus:ring-purple-300 hover:bg-DarkprimaryColor font-medium rounded-lg text-sm px-6 py-2  dark:focus:ring-purple-800 ">Track</button>
                        </div>


                </div>
            </div>

        </div>

    )
}
