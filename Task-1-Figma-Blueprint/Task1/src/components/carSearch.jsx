const CarSearchSection = () => (
 
    <div className="relative bg-[#5C3DFF] rounded-2xl px-6 sm:px-16 py-12 max-w-6xl w-full flex flex-col md:flex-row items-center overflow-hidden">
    
      <div className="flex-1 z-10">
        <h2 className="text-white font-extrabold text-3xl text-left md:text-4xl mb-2">
          Enjoy every mile with<br />adorable companionship.
        </h2>
        <p className="text-white opacity-80 text-sm text-left mb-6 max-w-md">
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat
        </p>
      
        <form className="flex items-center rounded-2xl bg-white overflow-hidden max-w-md">
          <input
            type="text"
            placeholder="City"
            className="p-3 pl-4 flex-1 outline-none bg-white text-gray-800"
          />
          <button type="submit" className="bg-[#FF9E0C] hover:bg-[#ffc369] rounded-2xl text-white mr-2 mt-2 mb-2 font-semibold px-6 py-2">
            Search
          </button>
        </form>
      </div>
      
      <div className="hidden md:block absolute right-10 bottom-8 w-64  z-0 select-none">
       <img src="/FrontShadow.webp" className="opacity-30"/>
      </div>
    </div>
 
);

export default CarSearchSection;
