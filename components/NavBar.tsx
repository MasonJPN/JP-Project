'use client'
import Link from "next/link";
import { useState } from "react"

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative z-20 flex items-center bg-[#3A3A3A] text-[#F7F4E9] w-full h-20 shadow-md border-b border-black">

      
      <div className="flex items-center">
        <img
          src="/xylonLogo.png"
          alt="logo"
          className="h-14 w-14 md:h-16 md:w-16 ml-6 rounded-full p-2 shadow-md bg-[#F0EBE1] border border-black"
        />
        <h2 className="text-2xl px-4 font-semibold font-(family-name:--font-playfair)">
          <Link href="/">Xylon Design Co.</Link>
        </h2>
      </div>

      
      <button
        className="md:hidden flex flex-col gap-1.5 ml-auto mr-6"
        onClick={() => setOpen(!open)}
      >
        <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      
      <ul className="hidden md:flex items-center gap-8 ml-auto mr-10 text-lg font-medium">
        {['About Us', 'Contact', 'Ordering', 'Gallery'].map((label, i) => {
          const hrefs = ['/AboutUs', '/Contact', '/shop', '/Gallery']
          return (
            <li key={label} className="relative cursor-pointer hover:text-[#C4873A] transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#C4873A] after:transition-all after:duration-300 hover:after:w-full">
              <Link href={hrefs[i]}>{label}</Link>
            </li>
          )
        })}
      </ul>

      
      {open && (
        <ul className="absolute top-20 left-0 w-full bg-[#3A3A3A] border-t border-black flex flex-col items-start gap-0 text-lg font-medium md:hidden z-50">
          {[['About Us', '/AboutUs'], ['Contact', '/Contact'], ['Ordering', '/shop'], ['Gallery', '/Gallery']].map(([label, href]) => (
            <li key={label} className="w-full border-b border-[#555]">
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 hover:text-[#C4873A] hover:bg-[#444] transition"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}

    </nav>
  )
}