

import {Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="bg-[#15161d] text-white py-10">
            <div className="max-w-7xl mx-auto px-5">
         
                <div className="flex flex-col lg:flex-row justify-between items-center">
                 
                    <div className="text-2xl font-bold mb-6 lg:mb-0">[Finsweet]</div>

                  
                    <div className="flex flex-wrap justify-center lg:justify-end space-x-4 text-sm">
                        <a href="#home" className="hover:text-gray-300">
                            Home
                        </a>
                        <a href="#blog" className="hover:text-gray-300">
                            Blog
                        </a>
                        <a href="#about" className="hover:text-gray-300">
                            About us
                        </a>
                        <a href="#contact" className="hover:text-gray-300">
                            Contact us
                        </a>
                        <Link to="privacy" className="hover:text-gray-300">
                            Privacy Policy
                        </Link>
                    </div>
                </div>

             
                <div className="mt-10 bg-[#1e1f28] py-6 px-6 rounded-lg flex flex-col lg:flex-row justify-between items-center">
                 
                    <p className="text-lg font-medium text-center lg:text-left mb-4 lg:mb-0">
                        Subscribe to our newsletter to get <br /> latest updates and news
                    </p>

                   
                    <div className="flex w-full lg:w-auto">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="flex-grow lg:w-64 px-4 py-2 rounded-l bg-white text-black outline-none"
                        />
                        <button className="bg-yellow-500 text-black px-6 py-2 rounded-r font-semibold hover:bg-yellow-600">
                            Subscribe
                        </button>
                    </div>
                </div>

              
                <div className="mt-10 flex flex-col lg:flex-row justify-between items-center text-sm space-y-4 lg:space-y-0">
                 
                    <div className="text-center lg:text-left">
                        <p>Finstreet 118 2561 Fintown</p>
                        <p>
                            Hello@finsweet.com &nbsp; | &nbsp; 020 7993 2905
                        </p>
                    </div>


                    <div className="flex space-x-6">
                        <a href="#facebook" className="hover:text-gray-300">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#twitter" className="hover:text-gray-300">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#instagram" className="hover:text-gray-300">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#linkedin" className="hover:text-gray-300">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
