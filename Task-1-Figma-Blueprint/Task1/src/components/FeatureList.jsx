const features = [
  {
    title: "Erat at semper",
    desc: "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum"
  },
  {
    title: "Urna nec vivamus risus duis arcu",
    desc: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper"
  },
  {
    title: "Lobortis euismod imperdiet tempus",
    desc: "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi"
  },
  {
    title: "Cras nulla aliquet nam eleifend amet et",
    desc: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer."
  }
];

const FeatureListSection = () => (
  <section className="w-full flex flex-col md:flex-row justify-center items-start gap-12 py-12">
   
    <div className="md:w-[400px] flex-shrink-0 mx-auto">
      <img
        src="/car.png" 
        alt="Features"
        className="rounded-2xl w-full h-[400px] object-cover"
      />
    </div>
 
    <div className="max-w-xl w-full bg-white p-6 rounded-2xl border border-dotted shadow-2xl border-blue-300">
      {features.map((f, idx) => (
        <div key={idx} className="flex items-start mb-6 last:mb-0">
          <div className="w-7 h-7 min-w-7 min-h-7 flex items-center justify-center rounded-full bg-[#5C3DFF] text-white font-bold text-base mr-4">
            {idx + 1}
          </div>
          <div>
            <h6 className="font-bold mb-1">{f.title}</h6>
            <p className="text-sm text-gray-700">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureListSection;
