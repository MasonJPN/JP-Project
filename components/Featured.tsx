export default function Featured() {
  return (
    <section className="bg-[#F7F4E9] py-24 px-6 text-center">

      
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-semibold text-[#3E2A1F]">
         Featured Work
        </h1>
        <p className="text-lg text-[#6B4A2E] mt-4">
          Handcrafted pieces we've built
        </p>
      </div>

      
      <div className="max-w-5xl mx-auto mb-16">
        <img
          src="/fakeImage.png"
          className="w-full h-[400px] object-cover rounded-lg shadow-md"
        />
        <h2 className="py-8 text-2xl">Maple Table</h2>
      </div>

     
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        <img
          src="/fakeImage.png"
          className="w-full h-[250px] object-cover rounded-lg shadow-sm hover:scale-105 transition duration-300"
        />
        

        <img
          src="/fakeImage.png"
          className="w-full h-[250px] object-cover rounded-lg shadow-sm hover:scale-105 transition duration-300"
        />

        <img
          src="/fakeImage.png"
          className="w-full h-[250px] object-cover rounded-lg shadow-sm hover:scale-105 transition duration-300"
        />

        <img
          src="/fakeImage.png"
          className="w-full h-[250px] object-cover rounded-lg shadow-sm hover:scale-105 transition duration-300"
        />

      </div>

      
      <div className="mt-16">
        <button className="border border-[#3E2A1F] text-[#3E2A1F] px-8 py-3 rounded-full hover:bg-[#3E2A1F] hover:text-white transition">
          View Full Gallery
        </button>
      </div>

    </section>
  );
}
