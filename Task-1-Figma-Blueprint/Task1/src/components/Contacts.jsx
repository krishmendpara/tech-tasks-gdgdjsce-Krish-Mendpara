import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function InfoStrip() {
  return (
    <div className="flex flex-col max-w-7xl justify-between md:flex-row items-center  gap-10 py-7 bg-white">
      {/* Address */}
      <div className="flex items-center gap-3">
        <span className="bg-[#FFAE1A] rounded-full w-12 h-12 flex items-center justify-center">
          <MapPin className="w-6 h-6 text-white" />
        </span>
        <div>
          <div className="text-sm">Address</div>
          <div className="font-bold text-sm">Oxford Ave. Cary, NC 27511</div>
        </div>
      </div>
      {/* Email */}
      <div className="flex items-center gap-3">
        <span className="bg-[#FFAE1A] rounded-full w-12 h-12 flex items-center justify-center">
          <Mail className="w-6 h-6 text-white" />
        </span>
        <div>
          <div className="text-sm">Email</div>
          <div className="font-bold text-sm">nwiger@yahoo.com</div>
        </div>
      </div>
      {/* Phone */}
      <div className="flex items-center gap-3">
        <span className="bg-[#FFAE1A] rounded-full w-12 h-12 flex items-center justify-center">
          <Phone className="w-6 h-6 text-white" />
        </span>
        <div>
          <div className="text-sm">Phone</div>
          <div className="font-bold text-sm">+537 547-6401</div>
        </div>
      </div>
      {/* Opening Hours */}
      <div className="flex items-center gap-3">
        <span className="bg-[#FFAE1A] rounded-full w-12 h-12 flex items-center justify-center">
          <Clock className="w-6 h-6 text-white" />
        </span>
        <div>
          <div className="text-sm">Opening hours</div>
          <div className="font-bold text-sm">Sun-Mon: 10am - 10pm</div>
        </div>
      </div>
    </div>
  );
}
