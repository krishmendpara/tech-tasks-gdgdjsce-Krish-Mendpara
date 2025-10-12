export default function Poster() {
  return (
    <div className="max-w-5xl mx-auto mt-8 p-8 bg-[#5C3DFF] rounded-2xl flex flex-col md:flex-row items-center relative min-h-[260px]">
  
      <div className="flex-1 text-left z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Looking for a car?
        </h2>
        <div className="text-2xl md:text-3xl font-bold text-white mb-2">
          +537 547-6401
        </div>
        <div className="text-white text-sm max-w-md mb-4">
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in...
        </div>
        <button className="bg-[#FF9E0C] hover:bg-[#ffc369] text-white font-semibold rounded-md px-6 py-2 mt-2">
          Book now
        </button>
      </div>
     
      <div className="flex-1 flex justify-end items-center absolute right-8 bottom-0 h-full mr-20 md:right-0 md:bottom-0 z-0">
        <img
          src="/car.png"
          alt="Car"
          className="w-[280px] h-[120px] object-cover rounded-xl blur-sm"
        />
      </div>
    </div>
  );
}
