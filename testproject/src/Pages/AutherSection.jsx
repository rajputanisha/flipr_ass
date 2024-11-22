import maninblack from "../assets/Client-First - IMAGES/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.svg"
import glass from "../assets/Client-First - IMAGES/stained-glass-high-rise-building-1106476.svg"
import snap from "../assets/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984 (2).svg"
function AuthorSection() {
    const posts = [
        {
            id: 1,
            category: "Business",
            title: "Font sizes in UI design: The complete guide to follow",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: glass,
        },
        {
            id: 2,
            category: "Economy",
            title: "How to build rapport with your web design clients",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: maninblack,
        },
    ];

    return (
        <div className=" py-10">
            <div className="max-w-7xl mx-auto px-5">
               
                <div className="bg-gray-100 p-10 rounded-lg mb-16 flex flex-col lg:flex-row items-center lg:items-start gap-10">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mx-auto w-2/3">
                        <img
                            src={snap}
                            alt="Author"
                            className="w-44 h-64  object-cover"
                        />


                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-snug">
                                Hey there, I’m Andrew Johnson
                                <br />
                                and welcome to my Blog
                            </h1>
                            <p className="text-gray-600 mt-4 leading-relaxed w-2/3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                                blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
                                At risus viverra adipiscing at in tellus.
                            </p>

                         
                            <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                                <a href="#facebook" className="text-gray-600 hover:text-gray-800">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#twitter" className="text-gray-600 hover:text-gray-800">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#instagram" className="text-gray-600 hover:text-gray-800">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#linkedin" className="text-gray-600 hover:text-gray-800">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                 </div>
                  
                </div>

            
                <div className=" mx-auto max:w-2/3 w-2/3">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
                        My Posts
                    </h2>

                    <div className="space-y-8">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="flex flex-col lg:flex-row items-start gap-6 bg-white mb-10"
                            >
                           
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full lg:w-64 h-40 object-cover "
                                />

                            
                                <div>
                                    <p className="text-sm font-bold text-purple-600">
                                        {post.category.toUpperCase()}
                                    </p>
                                    <h3 className="text-lg font-semibold text-gray-800 mt-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mt-2">{post.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthorSection;
