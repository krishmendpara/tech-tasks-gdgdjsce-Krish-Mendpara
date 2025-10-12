export default function FeaturesHighlight() {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 flex flex-col md:flex-row gap-6 bg-white">
  
      <div className="min-w-[280px] max-w-[340px] flex-1 md:mr-8">
        <h2 className="font-extrabold text-left text-3xl md:text-4xl mb-4">
          Where every<br />
          drive feels<br />
          extraordinary
        </h2>
      </div>
     
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
        <div>
          <div className="font-bold text-lg text-left mb-0.5">Variety Brands</div>
          <p className="text-xs text-left text-gray-800">
            Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio
          </p>
        </div>
        <div>
          <div className="font-bold text-left text-lg mb-0.5">Awesome Suport</div>
          <p className="text-xs text-left text-gray-800">
            Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit
          </p>
        </div>
        <div>
          <div className="font-bold text-left text-lg mb-0.5">Maximum Freedom</div>
          <p className="text-xs text-left text-gray-800">
            Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in
          </p>
        </div>
        <div>
          <div className="font-bold text-left text-lg mb-0.5">Flexibility On The Go</div>
          <p className="text-xs text-left text-gray-800">
            Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis.faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl
          </p>
        </div>
      </div>
    </div>
  );
}
