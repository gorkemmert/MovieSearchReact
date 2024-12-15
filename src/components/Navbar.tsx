import { logo } from "../assets";

const Navbar = () => {
    return (
        <div className="w-full h-[100px] z-10 bg-[#ECEBDE] drop-shadow-lg">
            <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto px-8">
               
                <div className="flex items-center space-x-4">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="h-[50px] w-[50px] object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;