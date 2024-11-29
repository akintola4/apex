

export default function Hero() {

    return (



        <div id="hero" className="w-full relative text-white bg-no-repeat bg-cover h-screen z-0 overflow-hidden bg-hero-bg" data-aos="zoom-in">
            <div className="relative px-5 top-0 left-0 w-full h-full z-10 bg-black/50 flex items-center justify-center flex-col gap-5 ">
                <div className="flex flex-col gap-4 md:gap-10 items-center text-center">
                    <h4 className="font-extrabold lg:text-7xl md:text-6xl text-3xl w-full xl:w-8/12 ">The Logistics Company you
                        can trust to Deliver</h4>
                    <p className="font-normal text-sm md:text-lg xl:w-6/12 text-gray-200 dark:text-gray-300">Welcome to Apex Logistics,your reliable partner for fast, flexible delivery. Track in real-time and enjoy 24/7 support with every shipment.</p>
                </div>

                <form className="w-full md:w-8/12 xl:w-5/12">
                    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        </div>
                        <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-2xl border border-gray-300  bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Enter tracking number" />
                        <button type="submit" className=" absolute end-2.5 bottom-2.5 bg-btn-base-light text-white  dark:bg-btn-base-dark focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-2  dark:focus:ring-purple-800">Track</button>
                    </div>
                </form>

            </div>
        </div>

    )
}