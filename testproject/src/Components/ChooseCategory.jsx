import { Link } from "react-router-dom";
import logo from "../assets/Client-First - icons/business-and-trade 1.svg";
import startup from "../assets/Client-First - icons/Icon (2).svg";
import logo2 from "../assets/Client-First - icons/Icon-1.svg";
import logo3 from "../assets/Client-First - icons/icon.svg";

export default function ChooseCategory() {
    return (
        <>
            <Link to="/category">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {[
                        { name: "Business", icon: logo2, active: false },
                        { name: "Startup", icon: startup, active: true },
                        { name: "Economy", icon: logo3, active: false },
                        { name: "Technology", icon: logo, active: false },
                    ].map((category, index) => (
                        <div
                            key={index}
                            className={`p-6 text-left border rounded-lg hover:bg-yellow-300 border-yellow-500 bg-white`}
                        >
<div className=" ">
                                <img src={category.icon} alt={category.name} className="w-12 h-12 mb-4 bg-yellow-50 p-2" />
</div>
                         
                            <h3 className="text-lg font-bold">{category.name}</h3>
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    ))}
                </div>
            </Link>
        </>
    );
}
