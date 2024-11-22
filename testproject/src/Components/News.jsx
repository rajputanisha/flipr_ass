import twowoman from "../assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533.svg"
import people from "../assets/Client-First - IMAGES/photo-of-people-doing-handshakes-3183197.svg"
import people1 from "../assets/Client-First - IMAGES/photo-of-woman-looking-at-man-3183173.svg"

const LatestNews = () => {
    const news = [
        {
            id: 1,
            image:  twowoman ,
            author: "John Doe",
            date: "Aug 23, 2021",
            title: "A UX Case Study Creating a Studious Environment for Students",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },
        {
            id: 2,
            image:  people ,
            author: "John Doe",
            date: "Aug 23, 2021",
            title: "A UX Case Study Creating a Studious Environment for Students",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },
        {
            id: 3,
            image:  people1 ,
            author: "John Doe",
            date: "Aug 23, 2021",
            title: "A UX Case Study Creating a Studious Environment for Students",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },
    ];

    return (
        <div className="container mx-auto px-6 lg:px-16 py-16">
            
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">What to read next</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white  overflow-hidden"
                    >
                 
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />

                   
                        <div className="py-6 text-left">
                            <p className="text-sm text-gray-500">
                                By <span className="text-purple-600 font-medium">{item.author}</span>{" "}
                                | {item.date}
                            </p>
                            <h3 className="text-lg font-bold mt-2">{item.title}</h3>
                            <p className="text-gray-600 mt-4">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestNews;
