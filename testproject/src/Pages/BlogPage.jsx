import BlogHero from "../Components/BlogHero";
import ChooseCategory from "../Components/ChooseCategory";
import JoinTeam from "../Components/JoinTeam";
import twowoman from "../assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533.svg"
import people from "../assets/Client-First - IMAGES/photo-of-people-doing-handshakes-3183197.svg"
import people1 from "../assets/Client-First - IMAGES/photo-of-woman-looking-at-man-3183173.svg"
import people2 from "../assets/Client-First - IMAGES/photo-of-people-walking-on-hallway-3182811.svg"
import{Link} from 'react-router-dom'
const BlogCardSection = () => {
    const blogs = [
        {
            category: "Startup",
            title: "Design tips for designers that cover everything you need",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            image: twowoman,
        },
        {
            category: "Business",
            title: "How to build rapport with your web design clients",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            image: people,
        },
        {
            category: "Startup",
            title: "Logo design trends to avoid in 2022",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            image: people1,
        },
        {
            category: "Technology",
            title: "8 Figma design systems you can download for free today",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            image: people2,
        },
        {
            category: "Economy",
            title: "Font sizes in UI design: The complete guide to follow",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            image: twowoman,
        },
    ];

    return (
        <>
            <BlogHero/>
            <div className="container mx-auto px-6 lg:px-16 py-10">
                <h2 className="text-2xl lg:text-3xl font-bold mb-8">All Posts</h2>
                <Link to="/single-blog" className="space-y-10">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="flex flex-col lg:flex-row gap-6 items-center bg-white  overflow-hidden"
                        >
                           
                            <div className="w-full lg:w-1/3">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-64 object-cover"
                                />
                            </div>

                         
                            <div className="w-full lg:w-2/3 p-6">
                                <p className="text-sm uppercase font-semibold text-purple-500">
                                    {blog.category}
                                </p>
                                <h3 className="text-xl font-bold mt-2">{blog.title}</h3>
                                <p className="text-gray-600 mt-4">{blog.description}</p>
                            </div>
                        </div>
                    ))}
                </Link>

             
                <div className="flex justify-center items-center mt-8">
                    <button className="text-gray-600 hover:text-purple-500 text-sm font-medium mx-4">
                        &lt; Prev
                    </button>
                    <button className="text-gray-600 hover:text-purple-500 text-sm font-medium mx-4">
                        Next &gt;
                    </button>
                </div>

            </div>
            <div className="container mx-auto px-6 lg:px-16">

            
                <div className="text-left mb-12 py-6">
                    <h2 className="text-2xl  md:text-3xl font-bold"> All Categories</h2>
                </div>
                <ChooseCategory />
            </div>
            <JoinTeam/>
            </>
     
    );
};

export default BlogCardSection;
