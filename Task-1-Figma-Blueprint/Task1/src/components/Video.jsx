import { Play } from "lucide-react";

export default function VideoHero() {
  return (
    <div className="w-full flex justify-center border border-gray-500 rounded-4xl mt-10 items-center py-12">
      <div className="relative w-full max-w-xl h-340px">
        <img
          src="/mercedes.png"
          alt="Video Preview"
          className="w-full h-full object-cover rounded-2xl blur-sm"
        />
        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6D48E0] rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition"
          aria-label="Play video"
        >
          <Play className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
}
