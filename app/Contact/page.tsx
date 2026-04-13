'use client'
import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  return (
    <div className="min-h-screen bg-[#F0EBE1]">

      
      <div className="bg-[#3E2A1F] py-16 text-center">
        <p className="text-[#C4873A] text-sm font-semibold tracking-widest uppercase mb-3">
          Get in Touch
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#F7F4E9]">
          Contact Us
        </h1>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-start">

        {/* Left — contact info */}
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-[#C4873A] mb-6">
              Reach Us Directly
            </h2>
            <div className="flex flex-col gap-8">

              <div>
                <p className="text-xs tracking-widest uppercase text-[#837668] mb-1">Telephone</p>
                <p className="text-xl font-medium text-[#3E2A1F]">(317) 760-7854</p>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-[#837668] mb-1">Email</p>
                <p className="text-xl font-medium text-[#3E2A1F]">Jayreel2002@gmail.com</p>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-[#837668] mb-1">Hours</p>
                <p className="text-xl font-medium text-[#3E2A1F]">Mon – Fri: 8am – 5pm</p>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-[#837668] mb-1">Visit the Shop</p>
                <p className="text-xl font-medium text-[#3E2A1F]">
                  1128 Clairbourne Court<br />
                  Carmel, IN 46280
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Right — form */}
        <form className="bg-[#F7F4E9] border border-[#D6D0C4] rounded-xl p-8 flex flex-col gap-5 shadow-sm">

          <h2 className="text-2xl font-semibold text-[#3E2A1F] mb-2">
            Send a Message
          </h2>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold tracking-widest uppercase text-[#837668]">Name</label>
            <input
              className="border border-[#D6D0C4] bg-white rounded-md p-3 text-[#3E2A1F] focus:outline-none focus:ring-2 focus:ring-[#C4873A] placeholder:text-[#D6D0C4]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold tracking-widest uppercase text-[#837668]">Email</label>
            <input
              className="border border-[#D6D0C4] bg-white rounded-md p-3 text-[#3E2A1F] focus:outline-none focus:ring-2 focus:ring-[#C4873A] placeholder:text-[#D6D0C4]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold tracking-widest uppercase text-[#837668]">Telephone</label>
            <input
              className="border border-[#D6D0C4] bg-white rounded-md p-3 text-[#3E2A1F] focus:outline-none focus:ring-2 focus:ring-[#C4873A] placeholder:text-[#D6D0C4]"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(317) 555-0123"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold tracking-widest uppercase text-[#837668]">Message</label>
            <textarea
              className="border border-[#D6D0C4] bg-white rounded-md p-3 h-36 resize-none text-[#3E2A1F] focus:outline-none focus:ring-2 focus:ring-[#C4873A] placeholder:text-[#D6D0C4]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-[#C4873A] text-[#F7F4E9] font-semibold py-3 rounded-md hover:bg-[#A67C52] transition tracking-wide"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
  )
}

export default Contact