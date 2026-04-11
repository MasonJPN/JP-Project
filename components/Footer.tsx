export default function Footer() {
  return (
    <footer className="bg-[#3A3A3A] w-full py-12 text-[black]">
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-gray-200 text-lg">317-760-7854</p>
        </div>

        
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <h2 className="text-2xl font-semibold">Address</h2>
          <p className="text-gray-200 text-lg">
            1128 Clairbourne Court
            Carmel, IN 46280
          </p>
        </div>

        {/* Email & Socials */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl font-semibold">Email & Socials</h2>
          
          <ul className="flex items-center gap-6">
            <li>
              <a href="mailto:Jayreel2002@gmail.com" target="_blank" rel="noopener noreferrer">
                <img className="h-12 w-12 rounded-xl hover:scale-110 transition" src="/gmail.png" alt="Gmail" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/reel/DWkfHFYDyNP/" target="_blank" rel="noopener noreferrer">
                <img className="h-12 w-12 rounded-xl hover:scale-110 transition" src="/instagram.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img className="h-12 w-12 rounded-xl hover:scale-110 transition" src="/facebook.png" alt="Facebook" />
              </a>
            </li>
          </ul>
        </div>

      </div>

  

    
      <div className="mt-6 text-center">
        <p className="text-sm">&copy; 2026 XylonDesignCo. All rights reserved.</p>
      </div>
    </footer>
  )
}
