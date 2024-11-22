import  { useState } from 'react';
import {Link} from 'react-router-dom';
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#15161d] text-white p-5">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">[Finsweet]</div>
             
                <div className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/blog" className="hover:text-gray-300">Blog</Link>
                    <Link to="/about" className="hover:text-gray-300">About Us</Link>
                    <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
                    <button className="hidden md:block bg-white text-blue-900 px-6 py-2  shadow hover:bg-gray-100">Subscribe</button>
                </div>


             
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>

         
            <div
                className={`fixed top-0 left-0 w-full h-full bg-[#15161d] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50`}
            >
              
                <button className="absolute top-5 right-5" onClick={() => setIsOpen(false)}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

              
                <div className="flex flex-col items-center justify-center h-full">
                    <Link to="/" className="text-white text-lg py-4" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/blog" className="text-white text-lg py-4" onClick={() => setIsOpen(false)}>Blog</Link>
                    <Link to="/about" className="text-white text-lg py-4" onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link to="/contact" className="text-white text-lg py-4" onClick={() => setIsOpen(false)}>Contact Us</Link>
                    <button className="mt-6 px-6 py-3 bg-white text-blue-900  shadow hover:bg-gray-100" onClick={() => setIsOpen(false)}>Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
