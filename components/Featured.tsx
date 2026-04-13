import Link from "next/link"

export default function Featured() {
  const pieces = [
    { src: "/Chair.png", label: "Lounge Chair", wood: "Black Walnut" },
    { src: "/Stand.png", label: "Side Table", wood: "Hard Maple" },
    { src: "/OutdoorTable.png", label: "Outdoor Coffee Table", wood: "White Oak" },
    { src: "/OtherStand.png", label: "Corner Stand", wood: "Cherry" },
  ]

  return (
    <section className="bg-[#F7F4E9] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C4873A] mb-3">
            Our Work
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#3E2A1F]">
            Featured Pieces
          </h1>
          <p className="text-[#837668] mt-3 text-lg">
            Handcrafted pieces
          </p>
        </div>

        
        <div className="mb-3">
          <img
            src="/MapleTable.png"
            className="w-full h-120 object-cover rounded-xl"
            alt="Maple Table"
          />
        </div>
        <div className="mb-12 flex justify-between items-center">
          <div>
            <p className="text-[#3E2A1F] font-medium text-lg">Maple Dining Table</p>
            <p className="text-[#837668] text-sm tracking-wide">Hard Maple · Live Edge</p>
          </div>
          <Link
            href="/Gallery"
            className="text-xs font-semibold tracking-widest uppercase text-[#C4873A] hover:text-[#A67C52] transition"
          >
            View all →
          </Link>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {pieces.map((piece) => (
            <div key={piece.label} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-3">
                <img
                  src={piece.src}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition duration-300"
                  alt={piece.label}
                />
              </div>
              <p className="text-[#3E2A1F] font-medium text-sm">{piece.label}</p>
              <p className="text-[#837668] text-xs tracking-wide mt-0.5">{piece.wood}</p>
            </div>
          ))}
        </div>

        
        <div className="flex justify-center">
          <Link
            href="/Gallery"
            className="border border-[#3E2A1F] text-[#3E2A1F] px-10 py-3 rounded-full hover:bg-[#3E2A1F] hover:text-[#F7F4E9] transition font-medium tracking-wide"
          >
            View Full Gallery
          </Link>
        </div>

      </div>
    </section>
  )
}