import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="relative z-20 flex items-center bg-[#3A3A3A]/90 backdrop-blur-md
 text-[#F7F4E9] w-full h-22 shadow-md border-b border-black">

      
          <img
            src="/xylonLogo.png"
            alt="logo"
            className="h-20 w-20 ml-15 rounded-full p-2 shadow-md bg-[#F0EBE1] border border-black"
          />
          <h2 className="text-2xl px-4 font-semibold">
            <Link href="/">
            Xylon Design Co.
            </Link>
            </h2>
  

      <div className="ml-auto  mr-10 gap-30">
       
        <ul className="flex  justify-center items-end gap-20 text-lg font-medium">
          <li className="cursor-pointer hover:text-[#837668] transition">About Us</li>

          <li className="cursor-pointer hover:text-[#837668] transition">
            <Link href="/Contact">
            Contact
            </Link>
            </li>
            <li className="cursor-pointer hover:text-[#837668] transition">
           <Link href="/shop">
           Shop
           </Link> 
            </li>
          
          <li className="cursor-pointer hover:text-[#837668] transition">Gallery</li>
        </ul>

        
      </div>
        

    </nav>
  );
}



