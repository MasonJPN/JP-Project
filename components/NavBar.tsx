import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="relative z-20 flex items-center bg-[#3A3A3A]
 text-[#F7F4E9] w-full h-23 shadow-md border-b border-black">

      
          <img
            src="/xylonLogo.png"
            alt="logo"
            className="h-20 w-20 ml-15 rounded-full p-2 shadow-md bg-[#F0EBE1] border border-black"
          />
          <h2 className="text-2xl px-4 font-semibold font-(family-name:--font-playfair)">
            <Link href="/">
            Xylon Design Co.
            </Link>
            </h2>
  

      <div className="ml-auto  mr-10 gap-30">
       
        <ul className="flex  justify-center items-end gap-20 text-lg font-medium">
          <li className="relative cursor-pointer text-[#F7F4E9] hover:text-[#C4873A] transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#C4873A] after:transition-all after:duration-300 hover:after:w-full">
            <Link href="/AboutUs">
            About Us
            </Link>
          </li>

          <li className="relative cursor-pointer text-[#F7F4E9] hover:text-[#C4873A] transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#C4873A] after:transition-all after:duration-300 hover:after:w-full">
            <Link href="/Contact">
            Contact
            </Link>
            </li>

            <li className="relative cursor-pointer text-[#F7F4E9] hover:text-[#C4873A] transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#C4873A] after:transition-all after:duration-300 hover:after:w-full">
           <Link href="/shop">
           Ordering
           </Link> 
            </li>
          
          <li className="relative cursor-pointer text-[#F7F4E9] hover:text-[#C4873A] transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#C4873A] after:transition-all after:duration-300 hover:after:w-full">
            <Link href="/Gallery">
            Gallery
            </Link>
          </li>
        </ul>

        
      </div>
        

    </nav>
  );
}



