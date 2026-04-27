import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative md:w-screen ">
      
      <img
        src="/HeroImage.png"
        className="w-full h-screen object-cover brightness-50"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-[#F7F4E9] text-center px-4">
        
        <h1 className=" text-4xl md:text-7xl font-semibold drop-shadow-lg tracking-wide font-(family-name:--font-playfair)">
          Xylon Design Co.
        </h1>

        <h3 className="text-xl mt-4 drop-shadow-xl">
          Custom Hardwood Furniture, Built to pass on.
        </h3>

        <div className="flex gap-6 mt-8">
          <button className="border border-[#F7F4E9] px-6 py-3 rounded-full hover:bg-[#F7F4E9] hover:text-[#6B4A2E] transition">
            <Link href="/Gallery">
            View Work
            </Link>
          </button>

          <button className="bg-[#C4873A] px-6 py-3 rounded-full text-white hover:opacity-90 transition">
            <Link href="/shop">
            Custom Orders
            </Link>
          </button>
        </div>

      </div>
    </div>
  );
}
