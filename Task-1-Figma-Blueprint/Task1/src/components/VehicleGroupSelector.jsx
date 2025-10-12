import React, { useState } from "react";
import { Settings, Fuel, Snowflake } from "lucide-react";
import { CarCard } from "./CarCard";

const filters = [
  { label: "all vehicles" },
  { label: "Sedan" },
  { label: "Cabriotlet" },
  { label: "Pickup" },
  { label: "SUV" },
  { label: "Minivan" }
];

const cars = [
  { name: "Mercedes", type: "Sedan", price: 25 },
  { name: "Mercedes", type: "Sport", price: 50 },
  { name: "Mercedes", type: "Sedan", price: 45 },
  { name: "Porsche", type: "SUV", price: 40 },
  { name: "Toyota", type: "Sedan", price: 35 },
  { name: "Porsche", type: "SUV", price: 50 },
  { name: "Mercedes", type: "Sport", price: 50 },
  { name: "Toyota", type: "Sedan", price: 50 },
  { name: "Maybach", type: "SUV", price: 70 }
];



export default function VehicleGroupSelector() {
  const [activeFilter, setActiveFilter] = useState(filters[0].label);

  const filteredCars =
    activeFilter === "all vehicles"
      ? cars
      : cars.filter((car) => car.type === activeFilter);

  return (
    <div className="flex flex-col items-center min-h-screen bg-white py-8 px-2">
      <h1 className="text-4xl font-extrabold mb-5 text-center">Select a vehicle group</h1>
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {filters.map(f => (
          <button
            key={f.label}
            onClick={() => setActiveFilter(f.label)}
            className={`px-4 py-1 rounded-full font-medium text-sm border transition ${
              activeFilter === f.label
                ? "bg-[#7746EC] text-white border-[#7746EC] shadow"
                : "border-gray-300 text-gray-800 bg-white hover:bg-gray-100"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {filteredCars.length > 0
          ? filteredCars.map((car, i) => <CarCard car={car}/>)
          : (
            <div className="col-span-full text-center text-gray-400">
              No cars available for this type.
            </div>
          )}
      </div>
    </div>
  );
}
