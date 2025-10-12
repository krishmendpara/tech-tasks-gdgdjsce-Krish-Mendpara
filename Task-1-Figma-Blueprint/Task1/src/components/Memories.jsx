import { CheckCircle } from "lucide-react";

const features = [
  "Velit semper morbi. Purus non eu cursus porttitor tristique et gravida...",
  "Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum",
  "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor",
  "Quis nunc interdum gravida ullamcorper"
];

export default function MemoriesSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-12 gap-10">
 
      <div className="md:w-2/3 max-w-xl mx-auto">
        <h2 className="text-3xl text-left md:text-4xl font-extrabold leading-tight mb-3">
          Unlock unforgettable<br />memories on the road
        </h2>
        <p className="text-gray-600 text-left mb-5">
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {features.map((text) => (
            <div className="flex gap-2">
              <CheckCircle className="w-5 h-5 mt-1 text-[#6D48E0]" />
              <span className="text-sm text-left text-gray-800">{text}</span>
            </div>
          ))}
        </div>
      </div>
   
      <div className="md:w-1/3 flex justify-center">
        <img
          src="/mercedes.png"
          alt="Memory"
          className="rounded-xl w-[340px] h-[340px] object-cover blur-sm"
        />
      </div>
    </div>
  );
}
