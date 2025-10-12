import { MapPin, Mail, Phone, Facebook, Instagram, X, Globe, CarFront } from "lucide-react";

const Footer = () => (
 
    <div className="w-full max-w-7xl px-6 py-7 flex flex-col gap-6">
     
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-y-4">
    
        <div className="flex items-center min-w-[180px] mr-6">
         <CarFront/>
          <span className="font-semibold ml-2">Car Rental</span>
        </div>
     
        <div className="flex items-center min-w-[220px] mr-6">
          <MapPin className="w-6 h-6 text-[#FFB100] bg-[#FFB100]/20 rounded-full p-1.5 mr-2" />
          <div>
            <div className="text-xs font-bold">Address</div>
            <div className="text-xs font-semibold">Oxford Ave. Cary, NC 27511</div>
          </div>
        </div>
      
        <div className="flex items-center min-w-[220px] mr-6">
          <Mail className="w-6 h-6 text-[#FFB100] bg-[#FFB100]/20 rounded-full p-1.5 mr-2" />
          <div>
            <div className="text-xs font-bold">Email</div>
            <div className="text-xs font-semibold">nwiger@yahoo.com</div>
          </div>
        </div>
      
        <div className="flex items-center min-w-[180px]">
          <Phone className="w-6 h-6 text-[#FFB100] bg-[#FFB100]/20 rounded-full p-1.5 mr-2" />
          <div>
            <div className="text-xs font-bold">Phone</div>
            <div className="text-xs font-semibold">+537 547-6401</div>
          </div>
        </div>
      </div>

    
      <div className="flex flex-row gap-2 md:flex-nowrap justify-between items-start mt-3 gap-y-6">
        {/* About & Social */}
        <div className="flex flex-col  min-w-[220px]">
          <div className="font-bold text-sm text-left mb-2">
            Faucibus faucibus<br/> pellentesque dictum turpis.<br/> Id pellentesque turpis <br/>massa a id iaculis lorem tristique.
          </div>
          <div className="flex gap-4 mt-3 text-gray-700">
            <a href="#"><Facebook className="w-5 h-5" /></a>
            <a href="#"><Instagram className="w-5 h-5" /></a>
            <a href="#"><X className="w-5 h-5" /></a>
            <a href="#"><Globe className="w-5 h-5" /></a>
          </div>
        </div>
    
        <div className="flex flex-col pr-10 min-w-[120px]">
          <div className="font-bold mb-2">Useful links</div>
          <ul className="space-y-1 text-sm">
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">F.A.Q</a></li>
          </ul>
        </div>
       
        <div className="flex flex-col pr-10 min-w-[120px]">
          <div className="font-bold mb-2">Vehicles</div>
          <ul className="space-y-1 text-sm">
            <li>Sedan</li>
            <li>Cabriotlet</li>
            <li>Pickup</li>
            <li>Minivan</li>
            <li>SUV</li>
          </ul>
        </div>
       
        <div className="flex flex-col pr-15 min-w-[130px]">
          <div className="font-bold mb-2">Download App</div>
          <img src="/as.png" alt="App Store" className="h-9 mb-2 rounded" />
          <img src="/gp.png" alt="Google Play" className="h-9 rounded" />
        </div>
      </div>


      <div className="text-center text-xs text-gray-400 mt-6 tracking-wider">
        2025 CARRENTAL.COM. RANDOM PLACEHOLDER PRIVACY & POLICY.
      </div>
    </div>

);

export default Footer;
