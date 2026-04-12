

import Link from "next/link"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#F0EBE1]">

      {/* Header */}
      <div className="bg-[#3E2A1F] py-20 text-center px-6">
        <p className="text-[#C4873A] text-sm font-semibold tracking-widest uppercase mb-3">
          Our Story
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#F7F4E9]">
          About Xylon Design Co.
        </h1>
      </div>

      {/* What's in a name */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <img
            src="/xylonLogo.png"
            alt="Xylon Design Co. Logo"
            className="w-64 h-64 rounded-full bg-[#F7F4E9] border-4 border-[#C4873A] shadow-xl object-contain p-6"
          />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C4873A] mb-4">
            The Name
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#3E2A1F] mb-6">
            What does Xylon mean?
          </h2>
          <p className="text-[#837668] leading-relaxed mb-4">
            The word <span className="text-[#3E2A1F] font-semibold">ξύλον</span> — pronounced
            <span className="text-[#3E2A1F] font-semibold"> "xylon"</span> — is the ancient
            Greek word for wood. It referred not just to timber, but to living wood — the
            material of trees, of life, of things built to endure.
          </p>
          <p className="text-[#837668] leading-relaxed">
            We chose it because it captures exactly what we believe about our craft.
            Wood isn't just a material — it has history, character, and grain that tells
            a story. Every piece we build carries that forward.
          </p>
        </div>
      </div>

      {/* Dark divider — the mission */}
      <div className="bg-[#3A3A3A] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C4873A] mb-4">
            What We Believe
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#F7F4E9] mb-8">
            Built to be passed down
          </h2>
          <p className="text-[#D6D0C4] text-lg leading-relaxed">
            We live in a world of flat-pack furniture and disposable design.
            Xylon exists as the alternative — pieces built with real wood,
            real joinery, and real intention. Furniture that won't end up
            at the curb in five years. Furniture that gets handed down.
          </p>
        </div>
      </div>

      {/* The maker */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C4873A] mb-4">
            The Maker
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#3E2A1F] mb-6">
            A one-man shop, by design
          </h2>
          <p className="text-[#837668] leading-relaxed mb-4">
            Xylon Design Co. is run out of a small shop in Carmel, Indiana. Every
            piece — from the first cut to the final coat of finish — passes through
            the same pair of hands. There's no factory, no assembly line, no
            shortcuts.
          </p>
          <p className="text-[#837668] leading-relaxed mb-4">
            What started as a hobby turned into a calling. Wood has a way of doing
            that. The more time you spend learning it — the grain, the movement, the
            way different species respond to a hand plane — the harder it is to stop.
          </p>
          <p className="text-[#837668] leading-relaxed">
            Every commission is a conversation. We build what you need, for the
            space you have, the way you want it.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/Owner.png"
            alt="The maker at work"
            className="w-80 h-96 object-cover rounded-xl border-4 border-[#C4873A] shadow-2xl"
          />
        </div>
      </div>

      {/* Values strip */}
      <div className="bg-[#3E2A1F] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C4873A] mb-4 text-center">
            How We Work
          </p>
          <h2 className="text-3xl font-semibold text-[#F7F4E9] mb-14 text-center">
            The Xylon standard
          </h2>
          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#4A2C14] rounded-xl p-8">
              <div className="text-[#C4873A] text-4xl font-semibold mb-4">01</div>
              <h3 className="text-xl font-semibold text-[#F7F4E9] mb-3">
                Solid wood only
              </h3>
              <p className="text-[#D6D0C4] leading-relaxed text-sm">
                No veneers, no particle board, no compromise. Every build uses
                solid hardwood milled and prepared in the shop.
              </p>
            </div>

            <div className="bg-[#4A2C14] rounded-xl p-8">
              <div className="text-[#C4873A] text-4xl font-semibold mb-4">02</div>
              <h3 className="text-xl font-semibold text-[#F7F4E9] mb-3">
                Traditional joinery
              </h3>
              <p className="text-[#D6D0C4] leading-relaxed text-sm">
                Mortise and tenon, dovetails, hand-cut joints. Built the way
                furniture has been built for centuries — because it works.
              </p>
            </div>

            <div className="bg-[#4A2C14] rounded-xl p-8">
              <div className="text-[#C4873A] text-4xl font-semibold mb-4">03</div>
              <h3 className="text-xl font-semibold text-[#F7F4E9] mb-3">
                Custom to you
              </h3>
              <p className="text-[#D6D0C4] leading-relaxed text-sm">
                Every piece starts with a conversation about your space, your
                needs, and your vision. Nothing is one-size-fits-all here.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}