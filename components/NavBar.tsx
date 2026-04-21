'use client'
import Link from "next/link";
import {useState} from "react"
export default function NavBar() {
  const [open, setOpen] = useState(false)
  return (




 

    <nav className="relative z-20 flex items-center bg-[#3A3A3A]
                  text-[#F7F4E9] w-full h-23 shadow-md border-b border-black">

      


              




          <img
            src="/xylonLogo.png"
            alt="logo"
            className=" h-15 w-15 md:h-20 md:w-20 ml-15 rounded-full p-2 shadow-md bg-[#F0EBE1] border border-black"
          />
          <h2 className="text-2xl px-4 font-semibold font-(family-name:--font-playfair)">
            <Link href="/">
            Xylon Design Co.
            </Link>
            </h2>
  



      <button
                  className="md:hidden flex flex-col gap-1.5"
                   onClick={() => setOpen(!open)}>
        <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
       <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>     





      <div className={`ml-auto  mr-10 gap-30 ${open ? 'block' : 'hidden} md:block`}>
       
        <ul className="flex  justify-center items-end gap-20 text-lg font-medium">

          <li className="relative cursor-pointer text-[#F7F4E9] hover:text-[#C4873A] transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#C4873A] after:transition-all after:duration-300 hover:after:w-full">
            <Link href="/AboutUs" onClick={() => setOpen(false)}>

            About Us
            </Link>
          </li>

          <li className="relative cursor-pointer text-[#F7F4E9] hover:text-[#C4873A] transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#C4873A] after:transition-all after:duration-300 hover:after:w-full">
            <Link href="/Contact" onClick={() => setOpen(false)}>
            Contact
            </Link>
            </li>

            <li className="relative cursor-pointer text-[#F7F4E9] hover:text-[#C4873A] transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#C4873A] after:transition-all after:duration-300 hover:after:w-full">
           <Link href="/shop" onClick={() => setOpen(false)}>
           Ordering
           </Link> 
            </li>
          
          <li className="relative cursor-pointer text-[#F7F4E9] hover:text-[#C4873A] transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#C4873A] after:transition-all after:duration-300 hover:after:w-full">
            <Link href="/Gallery" onClick={() => setOpen(false)}>
            Gallery
            </Link>
          </li>
        </ul>

        
      </div>
        

    </nav>
  );
}



