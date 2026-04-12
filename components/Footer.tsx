import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] w-full py-16 text-[#F7F4E9] border-t border-[#C4873A]">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

        {/* Logo + Brand */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img
            src="/xylonLogo.png"
            alt="logo"
            className="h-16 w-16 rounded-full bg-[#F0EBE1] border border-black p-2"
          />
          <p className="text-[#F7F4E9] font-semibold text-lg">Xylon Design Co.</p>
          <p className="text-[#D6D0C4] text-sm">Custom Hardwood Furniture,<br/>Built to pass on.</p>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-[#C4873A]">Navigate</h2>
          <ul className="flex flex-col gap-2 text-[#D6D0C4]">
            <li><Link href="/" className="hover:text-[#C4873A] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#C4873A] transition">About Us</Link></li>
            <li><Link href="/shop" className="hover:text-[#C4873A] transition">Shop</Link></li>
            <li><Link href="/Contact" className="hover:text-[#C4873A] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-[#C4873A]">Contact</h2>
          <p className="text-[#D6D0C4]">317-760-7854</p>
          <p className="text-[#D6D0C4]">
            1128 Clairbourne Court<br />
            Carmel, IN 46280
          </p>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-[#C4873A]">Connect</h2>
          <ul className="flex items-center gap-4">
            <li>
              <a href="mailto:Jayreel2002@gmail.com">
                <img className="h-10 w-10 bg-[#3A3A3A] border border-white/10 p-2 rounded-lg hover:scale-110 hover:border-[#C4873A] transition" src="/gmail.png" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/reel/DWkfHFYDyNP/">
                <img className="h-10 w-10 bg-[#3A3A3A] border border-white/10 p-2 rounded-lg hover:scale-110 hover:border-[#C4873A] transition" src="/instagram.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="h-10 w-10 bg-[#3A3A3A] border border-white/10 p-2 rounded-lg hover:scale-110 hover:border-[#C4873A] transition" src="/facebook.png" />
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center">
        <p className="text-sm text-[#D6D0C4]">
          © 2026 XylonDesignCo. All rights reserved.
        </p>
      </div>

    </footer>
  )
}