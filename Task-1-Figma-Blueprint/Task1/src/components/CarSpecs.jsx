import { Settings, Fuel, DoorOpen, Snowflake, Users, Gauge, CheckCircle } from "lucide-react";

const specs = [
    { label: "Gear Box", value: "Automat", icon: <Settings size={20} /> },
    { label: "Fuel", value: "Petrol", icon: <Fuel size={20} /> },
    { label: "Doors", value: "2", icon: <DoorOpen size={20} /> },
    { label: "Air Conditioner", value: "Yes", icon: <Snowflake size={20} /> },
    { label: "Seats", value: "5", icon: <Users size={20} /> },
    { label: "Distance", value: "500", icon: <Gauge size={20} /> }
];

const equipment = [
    ["ABS", true],
    ["Air Bags", false],
    ["Cruise Control", true],
    ["Air Conditioner", true]
];

export default function CarDetail() {
    return (
        <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto my-12 px-2">

            <div className="w-full md:w-1/2 bg-white rounded-xl shadow p-7 flex flex-col">
                <h2 className="font-bold text-2xl mb-2">BMW</h2>
                <div className="text-[#7746EC] font-bold text-2xl mb-1">
                    $25 <span className="text-gray-600 text-base font-normal">/ day</span>
                </div>

                <div className="flex justify-center items-center my-5">
                    <img src="/car.png" />
                </div>

                <div className="flex gap-4 mt-auto">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-20 h-14 bg-gray-300 rounded-lg" />
                    ))}
                </div>
            </div>

            <div className="w-full md:w-1/2 bg-white rounded-xl shadow p-7 flex flex-col">
                <h3 className="font-bold text-lg mb-4">Technical Specification</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {specs.map(spec => (
                        <div key={spec.label} className="bg-gray-50 rounded-lg px-3 py-4 flex flex-col items-start">
                            {spec.icon}
                            <span className="font-semibold mt-2 text-sm">{spec.label}</span>
                            <span className="text-gray-600 text-xs">{spec.value}</span>
                        </div>
                    ))}
                </div>
                <div className="text-start">
                    <button className="w-full md:w-1/2 mx-auto mb-5 bg-[#7746EC] hover:bg-[#5C3DFF] text-white font-bold rounded-lg px-8 py-3">
                        Rent a car
                    </button>
                </div>

                <div className="font-bold text-start text-base mb-2">Car Equipment</div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    {equipment.map(([label, checked], i) => (
                        <div key={label} className="flex items-center gap-2">
                            <CheckCircle className={`w-4 h-4 ${checked ? "text-[#7746EC]" : "text-gray-300"}`} />
                            <span className={checked ? "" : "text-gray-400"}>{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
