import ListOfAuther from "./ListOfAuther";
import Testimonials from "./Testimonial";
import man from "../assets/Client-First - IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg"
import building from "../assets/Client-First - IMAGES/white-concrete-building-1838640.svg"

import ChooseCategory from "./ChooseCategory";

function HomeSection() {
    return (
        <div>
         
            <div
                className="relative bg-cover bg-center h-screen "
                style={{
                    backgroundImage: `url(${man})`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start max-w-[54rem] px-6  md:pl-[5.5rem] text-white">
                    <p className="text-sm uppercase tracking-wide font-semibold text-yellow-500">
                        Posted on Startup
                    </p>
                    <h1 className="text-3xl lg:text-5xl font-bold mt-4">
                        Step-by-step guide to choosing great font pairs
                    </h1>
                    <p className="mt-4 text-gray-300 leading-relaxed">
                        By James West | May 23, 2022
                    </p>
                    <p className="mt-4 leading-relaxed">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident.
                    </p>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 mt-6 ">
                        Read More
                    </button>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-5 py-10 lg:py-16">
                <div className="flex flex-col lg:flex-row  gap-10">
              
                    <div className=" w-[60%]">
                        <h2 className="text-2xl font-bold mb-6">Featured Post</h2>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            
                            <img
                                src={building}
                                alt="Featured"
                                className="w-full md:h-80 object-cover p-6"
                            />
                            <div className="p-6">
                                <p className="text-sm text-gray-500">
                                    By John Doe | May 25, 2022
                                </p>
                                <h3 className="text-lg font-bold mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor.
                                </h3>
                                <p className="text-gray-600 mt-4">
                                    Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                    occaecat cupidatat non proident.
                                </p>
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 mt-6 ">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>

                
                    <div className=" w-[40%]">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">All Posts</h2>
                            <a
                                href="#"
                                className="text-yellow-500 hover:text-yellow-600 text-sm font-medium"
                            >
                                View All
                            </a>
                        </div>
                        <div className="space-y-6 h-[590px]  overflow-scroll scrollbar-hide">
                            {[1, 2, 3, 4,5,6,7,8,9,].map((post, index) => (
                                <div
                                    key={index}
                                    className="p-6    hover:bg-yellow-100 bg-white 
                                        "
                                >
                                        <p className="text-sm text-gray-500">By John Doe | Aug 23, 2021</p>
                                        <h3 className="text-md font-semibold mt-2">
                                            8 Figma design systems that you can download for free today.
                                        </h3>
                                  
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


                <div className="py-16 container mx-auto px-4 lg:px-16 ">
                    <div className="bg-purple-100 relative py-16  mx-auto px-6 lg:px-16">
                       
                    <div className="absolute top-0 left-0 w-[15%] h-2 bg-white"></div>
                        <div className="absolute top-0 left-[15%] w-[70%] h-2 bg-yellow-400"></div>
                        <div className="absolute top-0 right-0 w-[15%] h-2 bg-purple-500"></div>

                      
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
                       
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold text-gray-500 uppercase">
                                    About Us
                                </h3>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                                    We are a community of content writers who share their learnings
                                </h2>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a
                                    href="#"
                                    className="text-purple-600 font-medium hover:underline inline-block mt-2"
                                >
                                    Read More &gt;
                                </a>
                            </div>

                         
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold text-gray-500 uppercase">
                                    Our Mission
                                </h3>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                                    Creating valuable content for creatives all around the world
                                </h2>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>




            <div className="container mx-auto px-6 lg:px-16">

              
                <div className="text-center mb-12 py-10">
                    <h2 className="text-2xl md:text-3xl font-bold">Choose A Category</h2>
                </div>
                <ChooseCategory/>
            </div>

            <ListOfAuther />
            <Testimonials/>
        </div>
    );
}

export default HomeSection;
