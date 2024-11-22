import { useState } from "react";
import twowoman from "../assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533.svg"
import icon from "../assets/Client-First - icons/Icon (2).svg"


const postsData = [
    {
        id: 1,
        category: "Startup",
        title: "How to build a successful startup",
        description:
            "Learn the best practices to build a scalable and successful startup from scratch.",
        image: twowoman,
        tags: ["Business", "Marketing"],
    },
    {
        id: 2,
        category: "Business",
        title: "Top 6 free website mockup tools 2022",
        description:
            "Explore the top free tools to create website mockups that stand out.",
        image: twowoman,
        tags: ["Design", "Technology"],
    },
    {
        id: 3,
        category: "Economy",
        title: "Understanding economic trends in 2023",
        description:
            "A deep dive into global economic trends and how they affect businesses.",
        image: twowoman,
        tags: ["Finance", "Economy"],
    },
    {
        id: 4,
        category: "Technology",
        title: "Step-by-step guide to choosing great font pairs",
        description:
            "Discover how to choose the best font pairs to enhance your designs.",
        image: twowoman,
        tags: ["Design", "Typography"],
    },
    {
        id: 5,
        category: "Business",
        title: "Ten free Google fonts that you should use",
        description:
            "Explore free and widely used Google fonts that fit every design.",
        image: twowoman,
        tags: ["Design", "Business"],
    },
    {
        id: 6,
        category: "Startup",
        title: "How to build a successful startup",
        description:
            "Learn the best practices to build a scalable and successful startup from scratch.",
        image: twowoman,
        tags: ["Business", "Marketing"],
    },
    {
        id: 7,
        category: "Startup",
        title: "Ten free Google fonts that you should use",
        description:
            "Explore free and widely used Google fonts that fit every design.",
        image: twowoman,
        tags: ["Design", "Startup"],
    },
];

const categoriesData = ["Startup", "Business", "Economy", "Technology"];
const tagsData = ["Business", "Design", "Marketing", "Finance", "Economy", "Technology", "Typography"];

function CategorySection() {
    const [activeCategory, setActiveCategory] = useState("Startup");
    const [activeTag, setActiveTag] = useState(null);

    // Filter 
    const filteredPosts = postsData
        .filter((post) => post.category === activeCategory)

    return (
        <div className=" min-h-screen py-10 px-5">
            <div className="max-w-7xl mx-auto">
              
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-800">{activeCategory}</h1>
                    <p className="text-gray-600 mt-2">
                        Explore the latest posts under the {activeCategory} category.
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                        <span className="text-gray-400">BLOG &gt; </span>
                        {activeCategory}
                    </p>
                </div>

            
                <div className="flex flex-col lg:flex-row gap-10">
                
                    <div className="flex-1 space-y-8">
                        {filteredPosts.slice(0, 4).map((post) => (
                            <div
                                key={post.id}
                                className="flex flex-col lg:flex-row items-center gap-6 bg-white "
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full lg:w-48 h-48 object-cover "
                                />
                                <div className="">
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

                   
                    <div className="w-full lg:w-72">
                     
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">
                                Categories
                            </h3>
                            <div className="space-y-4">
                                {categoriesData.map((category) => (
                                    <div
                                        key={category}
                                        onClick={() => {
                                            setActiveCategory(category);
                                            
                                        }}
                                        className={`flex items-center gap-4 p-4 rounded-sm cursor-pointer ${activeCategory === category
                                                ? "bg-yellow-100 text-yellow-800"
                                                : "border text-gray-700"
                                            }`}
                                    >
                                        <img
                                            src={icon}
                                            alt={`${category} icon`}
                                            className="w-6 h-6"
                                        />
                                        <span className="font-medium">{category}</span>
                                     
                                    </div>
                                ))}
                            </div>
                        </div>

                     
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">All Tags</h3>
                            <div className="flex flex-wrap gap-3">
                                {tagsData.map((tag, index) => (
                                    <span
                                        key={index}
                                        onClick={() => setActiveTag(tag)}
                                        className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium ${activeTag === tag
                                                ? "bg-purple-100 text-purple-800"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategorySection;
