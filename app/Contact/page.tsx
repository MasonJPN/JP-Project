'use client'
import React from 'react'
import {useState} from "react"
const Contact = () => {
 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [phone, setPhone] = useState("")
  return (



<div>

       <div className="text-center flex justify-center items-center mt-10 mb-20 text-3xl font-semibold text-[#837668]">
        <h1>CONTACT US TODAY</h1>
      </div>

    <div className="flex justify-">
      <div className="flex flex-col px-50 text-[#837668] gap-20 py-10 mb-10 text-2xl items-center text-center">

        
        <div className="w-full max-w-md">
          <h2 className="text-center">Telephone</h2>
          <p className="underline text-center">(317) 760-7854</p>
        </div>

        <div className="w-full max-w-md">
          <h2 className="text-center">Email</h2>
          <p className="underline text-center">Jayreel2002@gmail.com</p>
        </div>

        <div className="w-full max-w-md">
          <h2 className="text-center">Operating Hours</h2>
          <p className="text-center">Mon - Fri: 8am - 5pm</p>
        </div>

        <div className="w-full max-w-md">
          <h2 className="text-center">Visit the Shop</h2>
          <p className="text-center">
            1128 Clairbourne Court Carmel, IN 46280
          </p>
        </div>


        

      </div>

   <form className="flex flex-col px-10 py-8 w-145 mb-30 mr-30 bg-[#F7F4E9] rounded-xl shadow-md gap-6">

  <h2 className="text-center font-bold text-2xl text-[#3A3A3A]">
    Send Us a Message
  </h2>

  {/* Name */}
  <div className="flex flex-col gap-2">
    <label className="font-medium text-lg">Name:</label>
    <input
      className="border border-[#837668] rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#837668]"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Your Name"
    />
  </div>

  {/* Email */}
  <div className="flex flex-col gap-2">
    <label className="font-medium text-lg">Email:</label>
    <input
      className="border border-[#837668] rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#837668]"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Your Email"
    />
  </div>

  {/* Phone */}
  <div className="flex flex-col gap-2">
    <label className="font-medium text-lg">Telephone:</label>
    <input
      className="border border-[#837668] rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#837668]"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      placeholder="(317) 555-0123"
    />
  </div>

  {/* Message */}
  <div className="flex flex-col gap-2">
    <label className="font-medium text-lg">Message:</label>
    <textarea
      className="border border-[#837668] rounded-md p-2 h-32 w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#837668]"
      placeholder="Tell us about your project..."
    />
  </div>

  {/* Button */}
  <button className="mt-4 bg-[#3A3A3A] text-[#F7F4E9] py-3 rounded-md hover:bg-[#2a2a2a] transition">
    Send Message
  </button>

</form>


    </div>
</div>
  )
}

export default Contact
