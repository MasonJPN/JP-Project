import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] w-full text-[#F7F4E9] border-t border-[#C4873A]">

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 
                      grid grid-cols-2 sm:grid-cols-2 md:flex 
                      justify-between gap-8 md:gap-10">

        
        <div className="flex flex-col items-start gap-3 border-b border-white/10 pb-6 sm:border-none sm:pb-0">
          <div className="flex items-center gap-3">
            <img
              src="/xylonLogo.png"
              alt="logo"
              className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-[#F0EBE1] border border-black p-2"
            />
            <div>
              <p className="font-semibold text-base md:text-lg">Xylon Design Co.</p>
              <p className="text-[#D6D0C4] text-sm leading-relaxed">
                Custom Hardwood Furniture,<br />Built to pass on.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-start gap-3 border-b border-white/10 pb-6 sm:border-none sm:pb-0">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-[#C4873A]">
            Navigate
          </h2>
          <ul className="flex flex-col gap-1 text-[#D6D0C4]">
            <li><Link href="/" className="block py-1 text-base hover:text-[#C4873A] transition">Home</Link></li>
            <li><Link href="/AboutUs" className="block py-1 text-base hover:text-[#C4873A] transition">About Us</Link></li>
            <li><Link href="/shop" className="block py-1 text-base hover:text-[#C4873A] transition">Ordering</Link></li>
            <li><Link href="/Contact" className="block py-1 text-base hover:text-[#C4873A] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-start gap-3 border-b border-white/10 pb-6 md:border-none md:pb-0">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-[#C4873A]">
            Contact
          </h2>
          <p className="text-[#D6D0C4]  text-sm md:text-lg">317-760-7854</p>
          <p className="text-[#D6D0C4] text-sm md:text-lg leading-relaxed">
            1128 Clairbourne Court<br />
            Carmel, IN 46280
          </p>
        </div>

        {/* Social */}
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-[#C4873A]">
            Connect
          </h2>
          <ul className="flex items-center gap-4">
            <li>
              <a href="mailto:Jayreel2002@gmail.com">
                <img className="h-12 w-12 bg-[#3A3A3A] border border-white/10 p-2 rounded-lg hover:scale-110 hover:border-[#C4873A] transition" src="/gmail.png" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/reel/DWkfHFYDyNP/">
                <img className="h-12 w-12 bg-[#3A3A3A] border border-white/10 p-2 rounded-lg hover:scale-110 hover:border-[#C4873A] transition" src="/instagram.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="h-12 w-12 bg-[#3A3A3A] border border-white/10 p-2 rounded-lg hover:scale-110 hover:border-[#C4873A] transition" src="/facebook.png" />
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 text-center py-6">
        <p className="text-sm text-[#D6D0C4]">
          © 2026 Xylon Design Co. All rights reserved.
        </p>
      </div>

    </footer>
  )
}
