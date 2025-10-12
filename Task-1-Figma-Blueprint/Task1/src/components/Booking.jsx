export default function BookCar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[400px] my-10 gap-6">

      <div className="bg-[#5C3DFF] rounded-xl px-8 py-10 flex flex-col gap-5 w-full max-w-md items-center shadow-lg">
        <h2 className="font-bold text-2xl text-white mb-4 text-center">Book your car</h2>
        <select className="w-full bg-[#7148E4] bg-opacity-40 text-white p-3 rounded-lg outline-none">
          <option>Car type</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="convertible">Convertible</option>
          <option value="pickup">Pickup</option>
          <option value="minivan">Minivan</option>
        </select>
        <select className="w-full bg-[#7148E4] bg-opacity-40 text-white p-3 rounded-lg outline-none">
          <option>Place of rental</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="bengaluru">Bengaluru</option>
          <option value="hyderabad">Hyderabad</option>
          <option value="chennai">Chennai</option>
          <option value="kolkata">Kolkata</option>
        </select>
        <select className="w-full bg-[#7148E4] bg-opacity-40 text-white p-3 rounded-lg outline-none">

          <option>Place of return</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="bengaluru">Bengaluru</option>
          <option value="hyderabad">Hyderabad</option>
          <option value="chennai">Chennai</option>
          <option value="kolkata">Kolkata</option>
        </select>
        <div className="w-full flex items-center gap-2 bg-[#7148E4] bg-opacity-40 rounded-lg px-3">
          <input type="date" className="w-full p-2 bg-transparent outline-none text-white" />

        </div>
        <div className="w-full flex items-center gap-2 bg-[#7148E4] bg-opacity-40 rounded-lg px-3">
          <input type="date" className="w-full p-2 bg-transparent outline-none text-white" />

        </div>
        <button className="w-full bg-[#FF9E0C] hover:bg-[#ffc369] rounded-lg py-3 font-semibold text-white mt-3">
          Book now
        </button>
      </div>

      <div className="w-full max-w-xl flex items-center justify-center">
        <img
          src="/car.png"
          alt="Car"
          className="rounded-xl w-full h-[320px] object-cover "
        />
      </div>
    </div>
  );
}
