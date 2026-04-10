export default function Hero() {
  return (
    <div className="relative w-screen h-[470px]">
      
      <img
        src="/HeroImage.png"
        className="w-full h-full object-cover brightness-75"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-[#F7F4E9] text-center px-4">
        
        <h1 className="text-6xl font-semibold drop-shadow-md tracking-wide">
          XylonDesignCo.
        </h1>

        <h3 className="text-xl mt-4 drop-shadow-md">
          Custom Hardwood Furniture, Built to pass on.
        </h3>

        <div className="flex gap-6 mt-8">
          <button className="border border-[#F7F4E9] px-6 py-3 rounded-full hover:bg-[#F7F4E9] hover:text-[#6B4A2E] transition">
            View Work
          </button>

          <button className="bg-[#6B4A2E] px-6 py-3 rounded-full text-white hover:opacity-90 transition">
            Custom Orders
          </button>
        </div>

      </div>
    </div>
  );
}
