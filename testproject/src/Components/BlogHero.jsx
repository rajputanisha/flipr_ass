import man from "../assets/Client-First - IMAGES/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.svg"
const BlogHero = () => {
    return (
        <div className="bg-purple-50 py-16">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  
                    <div className="space-y-4">
                        <p className="text-sm font-semibold uppercase text-gray-600">
                            Featured Post
                        </p>
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
                            Step-by-step guide to choosing great font pairs
                        </h1>
                        <p className="text-sm text-gray-600">
                            By{" "}
                            <span className="text-purple-600 font-medium">John Doe</span> | May
                            23, 2022
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident.
                        </p>
                        <button className="bg-yellow-500 text-black font-medium px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">
                            Read More &gt;
                        </button>
                    </div>

                 
                    <div>
                        <img
                            src={man}
                            alt="Man at desk"
                            className="rounded-lg shadow-lg object-cover w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHero;
