import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-[#5C3DFF] to-[#120e6a] px-4 md:px-12 py-10 rounded-4xl">

      <div className="w-full md:w-1/2 max-w-xl text-white md:pr-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-left">
          Experience the road like never before
        </h1>
        <p className="mb-8 text-lg md:text-xl font-medium opacity-85 text-left">
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper.
        </p>
        <button className="bg-[#FF9E0C] hover:bg-[#ffc369]  transition font-semibold flex justify-between rounded-lg px-6 py-3  text-white" onClick={() => navigate('/cars')}>
          View all cars
        </button>
      </div>


      <div className="w-full md:w-[370px] mb-10 md:mb-0">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full">
          <h2 className="font-bold text-2xl mb-6 text-gray-900">Book your car</h2>
          <form className="flex flex-col gap-4">
            <select className="p-3 rounded-lg border border-gray-200 focus:outline-none">
              <option>Car type</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="convertible">Convertible</option>
              <option value="pickup">Pickup</option>
              <option value="minivan">Minivan</option>
            </select>
            <select className="p-3 rounded-lg border border-gray-200 focus:outline-none">
              <option>Place of rental</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bengaluru">Bengaluru</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="chennai">Chennai</option>
              <option value="kolkata">Kolkata</option>
            </select>
            <select className="p-3 rounded-lg border border-gray-200 focus:outline-none">
              <option>Place of return</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bengaluru">Bengaluru</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="chennai">Chennai</option>
              <option value="kolkata">Kolkata</option>
            </select>
            <input type="date" className="p-3 rounded-lg border border-gray-200 focus:outline-none" placeholder="Rental date" />
            <input type="date" className="p-3 rounded-lg border border-gray-200 focus:outline-none" placeholder="Return date" />
            <button type="submit" className="mt-2 bg-[#FF9E0C]  hover:bg-[#ffc369] transition w-full rounded-lg text-white font-semibold py-3">
              Book now
            </button>
          </form>
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
