import image from "../assets/Client-First - IMAGES/ground-group-growth-hands-461049.svg"
import shape from "../assets/Client-First - IMAGES/shapes.svg"
import cover from "../assets/Client-First - IMAGES/photo-of-woman-wearing-eyeglasses-3184405.svg"
import Authers from "../Components/Authers";
import JoinTeam from "../Components/JoinTeam";
const AboutSection = () => {
    return (
        <>
            <div className="container mx-auto px-4 md:px-6 lg:px-16 pt-10">
               
                <div className=" relative md:pt-40">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className=" w-[55%]">

                        </div>
                        <div className="md:w-[45%]  ">

                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                   

                    <div className="md:absolute md:w-[50%] z-40 bg-white md:p-10 top-[80px] left-10">
                        <h3 className="text-sm font-semibold uppercase text-gray-500 mb-2">
                            About Us
                        </h3>
                        <h1 className="text-2xl lg:text-5xl font-bold text-gray-800 mb-6">
                            We are a team of content writers who share their learnings
                        </h1>
                      
                    </div>
                  
                </div>

 
                <div className="relative mt-12">
                    <img
                        src={cover}
                        alt="Team Back View"
                        className="w-full md:h-80 object-contain md:object-cover object-top"
                    />
                    <div className="md:absolute z-50 p-4 md:p-10 bottom-[0.50rem] left-[7rem]  flex justify-between md:gap-10 items-center  bg-yellow-500 text-dark  md:max:w-4xl ">
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">12+</h2>
                            <p className="text-sm">Blogs Published</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">18K+</h2>
                            <p className="text-sm">Views on Finsweet</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">30K+</h2>
                            <p className="text-sm">Total Active Users</p>
                        </div>
                    </div>
                   
                   
                    <div className="absolute bottom-0 left-[24.7%]    w-[40%] h-2 bg-yellow-400"></div>
                    <div className="absolute bottom-0 left-[9.7%]  w-[15%] h-2 bg-purple-500"></div>
                </div>

            </div>


            <div className=" container mx-auto px-4 lg:px-16 ">
                <div className="bg-purple-100 relative py-16  mx-auto px-6 lg:px-16">
                    {/* <div style={{
                        backgroundImage: `url(${cover})`,
                    }}>

                    </div> */}
                  
                 
                  
                 
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

            <div className="container mx-auto px-6 lg:px-16 py-16 space-y-16">
            
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                            Our team of creatives
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt.
                        </p>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                        </p>
                    </div>

               
                    <div className="relative">
                        <img
                            src={image}
                            alt="Team Hands"
                            className="rounded-lg"
                        />
                        <img src={shape} className="absolute top-16 left-0 w-12 h-12 bg-yellow-500  -translate-x-6 translate-y-6" />
                    </div>
                </div>

              
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    
                    <div className="relative">
                        <img
                            src={image}
                            alt="People Sitting"
                            className="rounded-lg"
                        />
                        <div className="absolute -bottom-11 left-0 w-12 h-12 bg-purple-500 rounded-full translate-x-6 -translate-y-6"></div>
                    </div>

                 
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                            Why we started this Blog
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt.
                        </p>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                        </p>
                    </div>
                </div>
            </div>
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 lg:px-16">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-center text-gray-800 mb-10">
                        List of Authors
                    </h3>

                    <Authers />
                    <Authers />
                </div>
            </section>
            <JoinTeam />
        </>

    );
};

export default AboutSection;
