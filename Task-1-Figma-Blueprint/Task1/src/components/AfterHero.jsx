import { MapPin, Car, Wallet } from "lucide-react";

const AfterHero = () => (
  <section className="w-full bg-white py-12">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    
      <div>
        <MapPin className="mx-auto h-16 w-16 text-black mb-4" strokeWidth={1.7} />
        <h3 className="text-xl font-bold mb-2">Availability</h3>
        <p className="text-base text-black">
          Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis
        </p>
      </div>
   
      <div>
        <Car className="mx-auto h-16 w-16 text-black mb-4" strokeWidth={1.7} />
        <h3 className="text-xl font-bold mb-2">Comfort</h3>
        <p className="text-base text-black">
          Gravida auctor fermentum morbi vulputate ac egestas orci etium convallis
        </p>
      </div>
  
      <div>
        <Wallet className="mx-auto h-16 w-16 text-black mb-4" strokeWidth={1.7} />
        <h3 className="text-xl font-bold mb-2">Savings</h3>
        <p className="text-base text-black">
          Pretium convallis id diam sed commodo vestibulum lobortis volutpat
        </p>
      </div>
    </div>
  </section>
);

export default AfterHero;
