import team1 from "../assets/Client-First - IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313 (2).svg"
import team2 from "../assets/Client-First - IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083 (2).svg"
import team3 from "../assets/Client-First - IMAGES/fashion-woman-cute-shoes-5704849.svg"
import team4 from "../assets/Client-First - IMAGES/content-baker-with-delicious-puff-in-cafeteria-6205509.svg"
import { Link } from "react-router-dom";
export default function Authers() {
  return (
    <>
          <Link to="/single-author">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                  { name: 'Floyd Miles', image: team1 },
                  { name: 'Dianne Russell', image: team2 },
                  { name: 'Jenny Wilson', image: team3 },
                  { name: 'Leslie Alexander', image: team4 },
              ].map((author, index) => (
                  <div
                      key={index}
                      className="bg-gray-50 rounded-lg shadow-md p-6 text-center"
                  >
                      <img
                          src={author.image}
                          alt={author.name}
                          className="w-24 h-24 rounded-full mx-auto mb-4"
                      />
                      <h4 className="text-lg font-medium text-gray-800">
                          {author.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                          Co-author, 10+ Articles
                      </p>
                      <div className="flex justify-center mt-4 space-x-4 text-gray-400">
                          <a href="#" className="hover:text-gray-600">
                              <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#" className="hover:text-gray-600">
                              <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#" className="hover:text-gray-600">
                              <i className="fab fa-linkedin-in"></i>
                          </a>
                      </div>
                  </div>
              ))}
          </div>
          </Link>
    </>
  )
}
