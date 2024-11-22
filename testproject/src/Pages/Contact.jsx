

function Contact() {
    return (
        <div className="bg-gray-50 py-10">
            <div className="max-w-5xl mx-auto px-5">
           
                <div className="text-center mb-10">
                    <p className="text-sm font-bold text-gray-500 uppercase">Contact Us</p>
                    <h1 className="text-3xl font-bold text-gray-800 mt-2">
                        Let’s Start a Conversation
                    </h1>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim.
                    </p>
                </div>

              
                <div className="bg-purple-700 text-white rounded-lg p-6 lg:p-10 mb-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div>
                        <h3 className="text-lg font-bold">Working Hours</h3>
                        <p className="mt-2">Monday To Friday</p>
                        <p className="font-bold">9:00 AM to 8:00 PM</p>
                        <p className="text-sm mt-1">Our Support Team is available 24/7</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Contact Us</h3>
                        <p className="mt-2 font-bold">020 7993 2905</p>
                        <p>hello@finsweet.com</p>
                    </div>
                </div>

              
                <form className="space-y-6">
                 
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            placeholder="Enter your full name"
                        />
                    </div>

                   
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            placeholder="Enter your email address"
                        />
                    </div>

                  
                    <div>
                        <label
                            htmlFor="query"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Query Related
                        </label>
                        <select
                            id="query"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        >
                            <option>General Inquiry</option>
                            <option>Support</option>
                            <option>Billing</option>
                            <option>Others</option>
                        </select>
                    </div>

                  
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            placeholder="Write your message"
                        ></textarea>
                    </div>

                   
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white font-bold py-3  hover:bg-yellow-600 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
