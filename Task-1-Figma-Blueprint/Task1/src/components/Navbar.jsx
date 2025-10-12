import React from "react";
import { CarFront, Phone } from "lucide-react";

const Navbar = () => {
    return (

        <div className="">
            <div className="flex justify-between items-center h-16">


                <div className="flex items-center ">
                    <CarFront className="w-6 h-6 text-black" />
                    <span className="font-bold text-lg text-black">Car Rental</span>
                </div>


                <div className="hidden md:flex space-x-6">
                    <a href="#" className="text-black hover:text-[#5937E0] font-medium">Home</a>
                    <a href="#" className="text-black hover:text-[#5937E0] font-medium">Vehicles</a>
                    <a href="#" className="text-black hover:text-[#5937E0] font-medium">Details</a>
                    <a href="#" className="text-black hover:text-[#5937E0] font-medium">About Us</a>
                    <a href="#" className="text-black hover:text-[#5937E0] font-medium">Contact Us</a>
                </div>


                <div className="flex items-center space-x-2 px-3 py-1 rounded-full ">
                  <div className="bg-[#5937E0] rounded-full w-9 h-9 flex items-center justify-center mr-0">
                    <Phone className="w-4 h-4 text-white " />
                    </div>  

                    <div className="inline-block">
                        <div className="">Need help?</div>
                        <div className="ml-4">+7999033932</div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Navbar;
