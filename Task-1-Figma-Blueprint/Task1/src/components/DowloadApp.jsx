const DownloadAppSection = () => (
  <section className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center py-16">
    {/* Left: Text and badges */}
    <div className="flex-1 flex flex-col items-start md:items-start mb-12 md:mb-0 md:mr-12">
      <h2 className="text-3xl md:text-4xl text-left font-extrabold mb-3">
        Download<br />mobile app
      </h2>
      <p className="text-gray-600 mb-6 text-left max-w-md">
        Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa.
        Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna...
      </p>
      <div className="flex gap-4">
        <img src="/as.png" alt="Download on the App Store" className="h-12" />
        <img src="/gp.png" alt="Get it on Google Play" className="h-15" />
      </div>
    </div>
  
    <div className="flex-1 flex justify-center items-center relative min-h-[340px] w-full">
   <img src="/twophone.webp"/>
    
    </div>
  </section>
);

export default DownloadAppSection;
