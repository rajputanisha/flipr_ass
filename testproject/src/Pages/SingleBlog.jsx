import woman from "../assets/Client-First - IMAGES/photo-of-woman-wearing-eyeglasses-3184405.svg"
import testi1 from "../assets/Client-First - IMAGES/Image.svg"
import LatestNews from "../Components/News";
import JoinTeam from "../Components/JoinTeam";

const SingleBlog = () => {
    return (
        <>
            <div className="container mx-auto px-6 lg:px-16 py-16">
              
                <div className="mb-10 max-w-3xl mx-auto">
                    <div className="flex items-center gap-4">
                        <img
                            src={testi1}
                            alt="Author"
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <p className="text-lg font-bold text-purple-600">Andrew Jonson</p>
                            <p className="text-sm text-gray-500">Posted on 27th January 2022</p>
                        </div>
                    </div>
                    <h1 className="mt-6 text-3xl lg:text-5xl font-bold text-gray-800">
                        Step-by-step guide to choosing great font pairs
                    </h1>
                    <p className="mt-4 text-lg font-medium text-purple-500 flex items-center gap-2">
                        🚀 Startup
                    </p>
                </div>

              
                <div className="mb-12">
                    <img
                        src={woman}
                        alt="Blog Header"
                        className="w-full rounded-lg"
                    />
                </div>

             
                <div className="space-y-8 max-w-3xl mx-auto">
                 
                    <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod.
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                            blandit massa enim nec scelerisque. Scelerisque viverra mauris in
                            aliquam sem. At risus viverra adipiscing at in tellus. Sociis
                            natoque penatibus et magnis dis parturient montes. Ridiculus mus
                            mauris vitae ultricies leo. Neque egestas congue quisque egestas
                            diam. Risus in hendrerit gravida rutrum quisque non.
                        </p>
                    </div>

                   
                    <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod.
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                            blandit massa enim nec scelerisque. Scelerisque viverra mauris in
                            aliquam sem. At risus viverra adipiscing at in tellus. Sociis
                            natoque penatibus et magnis dis parturient montes. Ridiculus mus
                            mauris vitae ultricies leo. Neque egestas congue quisque egestas
                            diam. Risus in hendrerit gravida rutrum quisque non.
                        </p>

                    
                        <ul className="list-disc pl-6 mt-6 text-gray-600">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Non blandit massa enim nec scelerisque</li>
                            <li>Neque egestas congue quisque egestas</li>
                        </ul>
                    </div>

                  
                    <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod.
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                            blandit massa enim nec scelerisque. Scelerisque viverra mauris in
                            aliquam sem. At risus viverra adipiscing at in tellus. Sociis
                            natoque penatibus et magnis dis parturient montes. Ridiculus mus
                            mauris vitae ultricies leo. Neque egestas congue quisque egestas
                            diam. Risus in hendrerit gravida rutrum quisque non.
                        </p>
                    </div>
                </div>
            </div>
            <LatestNews/>
            <JoinTeam />
        </>
      
    );
};

export default SingleBlog;
