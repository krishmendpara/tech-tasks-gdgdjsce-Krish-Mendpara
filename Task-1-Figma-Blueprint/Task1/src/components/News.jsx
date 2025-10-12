export default function BlogNewsSection() {
  const posts = [
    {
      image: "/car.png",
      title: "How To Choose The Right Car",
      meta: "News / 12April 2024"
    },
    {
      image: "/car.png",
      title: "Which plan is right for me?",
      meta: "News / 12April 2024"
    },
    {
      image: "/car.png",
      title: "Enjoy Speed, Choice & Total Control",
      meta: "News / 12April 2024"
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Latest blog posts & news
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {posts.map((post, idx) => (
          <div key={idx} className="flex flex-col w-full max-w-[300px]">
            <img
              src={post.image}
              alt={post.title}
              className="rounded-xl w-full h-[170px] object-cover blur-sm mb-4"
            />
            <div className="font-bold text-base mb-1">{post.title}</div>
            <div className="text-gray-400 text-sm">{post.meta}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
