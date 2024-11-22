
import team from "../assets/Client-First - IMAGES/photo-of-people-walking-on-hallway-3182811.svg"
import Authers from "./Authers"

export default function ListOfAuther() {
  return (
  <>
          <div className="font-sans">
         
              <section className="  relative">
                  <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center lg:gap-12">
                   
                      <div className="lg:w-[80%]  h-[500px]">
                          <img
                              src={team}
                              alt="Friends"
                              className="  h-full w-full object-cover"
                          />
                      </div>

                  
                      <div className="lg:w-[34%] h-[420px] md:absolute bg-white md:top-[16%] md:right-[8%]   md:text-center lg:text-left mt-8 lg:mt-0">
                          <div className="md:p-[2rem]">
                              <h3 className="text-gray-600 uppercase text-sm font-medium tracking-wide mb-4">
                                  Why We Started
                              </h3>
                              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
                                  It started out as a simple idea and evolved into our passion
                              </h2>
                              <p className="mt-6 text-gray-600 leading-relaxed">
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                  aliquip.
                              </p>
                              <button className="mt-8 px-6 py-3 bg-yellow-500 text-white font-medium  shadow-md hover:bg-yellow-600 transition">
                                  Discover our story &gt;
                              </button>
                      </div>
                         
                      </div>
                  </div>
              </section>


            
              <section className="bg-white py-16">
                  <div className="container mx-auto px-6 lg:px-16 py-16">
                      <h3 className="text-2xl lg:text-3xl font-semibold text-center text-gray-800 mb-10">
                          List of Authors
                      </h3>

                      <Authers/>
                  </div>
              </section>
          </div>
  </>
  )
}
