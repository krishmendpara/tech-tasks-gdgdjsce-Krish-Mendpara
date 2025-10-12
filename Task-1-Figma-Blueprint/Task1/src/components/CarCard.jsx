import { Car, Snowflake, Fuel, Settings, CarIcon } from "lucide-react";

const cars = [
  {
    name: "Mercedes",
    type: "Sedan",
    price: 25,
    unit: "per day",
  },
  {
    name: "Mercedes",
    type: "Sport",
    price: 50,
    unit: "per day",
  },
  {
    name: "Mercedes",
    type: "Sedan",
    price: 45,
    unit: "per day",
  },
  {
    name: "Porsche",
    type: "SUV",
    price: 40,
    unit: "per day",
  },
  {
    name: "Toyota",
    type: "Sedan",
    price: 35,
    unit: "per day",
  },
  {
    name: "Porsche",
    type: "SUV",
    price: 50,
    unit: "per day",
  },
];

const CarCard = ({ car }) => (
  <div className="rounded-2xl border border-gray-200 px-6 pt-7 pb-6 bg-white flex flex-col">
    {/* Placeholder for car image */}
    <div className="w-full flex justify-center mb-3">
      <img src="/carShadow.jpg" className="opacity-25"/>
    </div>
    <div className="flex items-center justify-between">
      <div>
        <span className="block font-bold text-black">{car.name}</span>
        <span className="text-left block text-gray-600 text-sm">{car.type}</span>
      </div>
      <div className="text-[#7746EC] font-bold text-lg">
        ${car.price} <span className="text-gray-500 text-xs font-normal">{car.unit}</span>
      </div>
    </div>
    <div className="flex gap-4 mt-4 text-sm text-gray-700">
      <span className="flex items-center gap-1"><Settings size={16}/>Automat</span>
      <span className="flex items-center gap-1"><Fuel size={16}/>PB 95</span>
      <span className="flex items-center gap-1"><Snowflake size={16}/>Air Conditioner</span>
    </div>
    <button className="bg-[#7746EC] hover:bg-[#5C3DFF] transition text-white font-semibold rounded-lg py-3 mt-6">View Details</button>
  </div>
);

const CarGridSection = () => (
  <section className="py-8">
    <div className="max-w-6xl mx-auto">
   
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-left text-3xl md:text-4xl font-extrabold">
          Choose the car that <br /> suits you
        </h2>
        <button className="flex items-center gap-1 font-bold text-black hover:text-[#7746EC] transition text-right">
          View All <span>→</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border border-dashed border-blue-300 rounded-2xl p-5 bg-white">
        {cars.map((car, idx) => (
          <CarCard car={car} key={idx} />
        ))}
      </div>
    </div>
  </section>
);

export default CarGridSection;
