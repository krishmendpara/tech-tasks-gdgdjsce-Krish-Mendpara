import { Car, User, Calendar, Gauge } from "lucide-react";

const facts = [
    {
        icon: <Car className="w-6 h-6 text-white" />,
        value: "540+",
        label: "Cars",
    },
    {
        icon: <User className="w-6 h-6 text-white" />,
        value: "20k+",
        label: "Customers",
    },
    {
        icon: <Calendar className="w-6 h-6 text-white" />,
        value: "25+",
        label: "Years",
    },
    {
        icon: <Gauge className="w-6 h-6 text-white" />,
        value: "20m+",
        label: "Miles",
    },
];

const FactsInNumbersSection = () => (
    
        <div className="bg-[#5C3DFF] rounded-2xl px-4 md:px-12 py-15 max-w-7xl w-full  text-center relative overflow-hidden">
            <h2 className="text-white font-extrabold text-2xl md:text-3xl mb-2">Facts In Numbers</h2>
            <p className="text-white text-sm mb-9 max-w-2xl mx-auto opacity-80">
                Amit eos hac vel iaculis. Faucibus posuere arcu lectus nibh sapien bibendum ullamcorper
                a diam dictumst tincidunt est at enim fermentum.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                {facts.map((fact, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl px-8 py-4 flex flex-row items-center gap-2 min-w-[140px] shadow"
                    >
                        <div className="bg-[#FF9E0C] p-3 rounded-lg mb-2 flex items-center justify-center">
                            {fact.icon}
                        </div>
                        <div className="inline-block">
                            <div className="text-lg font-bold">{fact.value}</div>
                            <div className="text-xs text-gray-700">{fact.label}</div>
                        </div>

                    </div>
                ))}
            </div>
         
        </div>
   
);

export default FactsInNumbersSection;
