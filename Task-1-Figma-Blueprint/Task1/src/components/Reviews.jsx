import { Quote } from "lucide-react";

const reviews = [
  {
    text: "Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque",
    company: "Kuphal LLC",
    name: "Emanuel Boyle",
    avatar: "/Audi.png"
  },
  {
    text: "Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula",
    company: "Glover - Orn",
    name: "River Graves",
    avatar: "/BMW.svg"
  },
  {
    text: "Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et",
    company: "Haag LLC",
    name: "Ryder Malone",
    avatar: "/Ford.jpg"
  }
];

export default function ReviewsSection() {
  return (
    <div className="py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Reviews from our customers
      </h2>
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="bg-yellow-50 rounded-2xl shadow flex flex-col justify-between items-center min-h-[340px] w-full max-w-xs">
            <div className="px-8 pt-8 pb-3 flex flex-col items-center flex-grow">
              <Quote className="w-7 h-7 text-[#6D48E0] mb-3" />
              <div className="text-center font-medium text-black mb-5">{r.text}</div>
            </div>
            <div className="w-full bg-[#6D48E0] rounded-b-2xl flex flex-col items-center pt-5 pb-5">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-14 h-14 rounded-full object-cover blur-sm mb-2"
              />
              <div className="text-xs text-white opacity-75">{r.company}</div>
              <div className="text-white font-bold">{r.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}