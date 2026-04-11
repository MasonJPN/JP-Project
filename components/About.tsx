export default function About() {
  return (
    <section className="bg-[#EFE9DC] py-24 px-6 ">

      
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#3E2A1F]">
          Built to Last Generations
        </h2>
      </div>

      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-40 items-center">

        
        <div className="text-[#6B4A2E] text-lg leading-relaxed">
          <p className="mb-6">
            We craft custom hardwood furniture using solid materials and
            time-tested techniques. Every piece is built with intention,
            designed to last, and made to be passed down.
          </p>

          <a
            href="/about"
            className="text-[#3E2A1F] font-medium hover:text-[#A67C52] transition"
          >
            Learn more →
          </a>
        </div>

        
        <div className="">
          <img
            src="/Owner.png"
            className="w-80 h-150 object-cover rounded-lg   border-4 border-[#6B4A2E] shadow-2xl shadow-brown"
          />
        </div>

      </div>

    </section>
  );
}
