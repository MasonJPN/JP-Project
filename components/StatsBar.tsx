export default function StatsBar() {
  return (
    <div className="bg-[#3A3A3A] w-full flex flex-col md:flex-row justify-between items-center px-8 md:px-20 py-10 md:py-0 md:h-50 gap-8 md:gap-0">

      <div className="items-center justify-center flex flex-col gap-3">
        <h2 className="text-5xl md:text-6xl text-[#C4873A] font-(family-name:--font-playfair)">50+</h2>
        <p className="text-lg md:text-2xl text-[#D6D0C4] text-center">Custom Builds Completed</p>
      </div>

      <hr className="w-40 h-0.5 md:w-0.5 md:h-40 bg-linear-to-r md:bg-linear-to-b from-transparent via-[#C4873A] to-transparent border-none" />

      <div className="items-center justify-center flex flex-col gap-3">
        <h2 className="text-5xl md:text-6xl text-[#C4873A] font-(family-name:--font-playfair)">100%</h2>
        <p className="text-lg md:text-2xl text-[#D6D0C4] text-center">Solid Wood Materials</p>
      </div>

      <hr className="w-40 h-0.5 md:w-0.5 md:h-40 bg-linear-to-r md:bg-linear-to-b from-transparent via-[#C4873A] to-transparent border-none" />

      <div className="items-center justify-center flex flex-col gap-3">
        <h2 className="text-5xl md:text-6xl text-[#C4873A] font-(family-name:--font-playfair)">Handmade</h2>
        <p className="text-lg md:text-2xl text-[#D6D0C4] text-center">Every Step of the Way</p>
      </div>

    </div>
  )

}