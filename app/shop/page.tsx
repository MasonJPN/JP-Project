import Link from "next/link"

export default function Shop() {
  return (
    <div className="min-h-screen bg-[#F0EBE1]">

      
      <div className="bg-[#3E2A1F] py-16 text-center">
        <p className="text-[#C4873A] text-sm font-semibold tracking-widest uppercase mb-3">
          Everything You Need to Know
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#F7F4E9]">
          Ordering & Shipping
        </h1>
      </div>

      
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-6">

       
        <div className="bg-[#F7F4E9] border border-[#D6D0C4] rounded-xl p-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C4873A] mb-3">
            01
          </p>
          <h2 className="text-2xl font-semibold text-[#3E2A1F] mb-4">
            How to Order
          </h2>
          <p className="text-[#837668] leading-relaxed">
            You can place an order by calling us at{" "}
            <span className="text-[#3E2A1F] font-medium">(317) 760-7854</span>{" "}
            or by filling out our{" "}
            <Link href="/Contact" className="text-[#C4873A] hover:text-[#A67C52] transition underline underline-offset-2">
              online contact form
            </Link>
            . If you're looking to customize a standard piece or commission something
            completely custom, a phone call is the best place to start — we'll walk
            through the details together.
          </p>
        </div>

        
        <div className="bg-[#F7F4E9] border border-[#D6D0C4] rounded-xl p-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C4873A] mb-3">
            02
          </p>
          <h2 className="text-2xl font-semibold text-[#3E2A1F] mb-4">
            Lead Time
          </h2>
          <p className="text-[#837668] leading-relaxed">
            Every piece is built to order. Orders are scheduled and built in the
            sequence they're received. In most cases you can expect your furniture
            to be completed and ready{" "}
            <span className="text-[#3E2A1F] font-medium">8 to 12 weeks</span>{" "}
            after your deposit is received. For a current lead time estimate based
            on our schedule, give us a call or send an email.
          </p>
        </div>

        
        <div className="bg-[#F7F4E9] border border-[#D6D0C4] rounded-xl p-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C4873A] mb-3">
            03
          </p>
          <h2 className="text-2xl font-semibold text-[#3E2A1F] mb-4">
            Payment Terms
          </h2>
          <p className="text-[#837668] leading-relaxed">
            We accept payment by cash, check, or digital transfer. A{" "}
            <span className="text-[#3E2A1F] font-medium">10% deposit</span> is
            required when your order is placed, with the remaining balance due
            upon completion before delivery or pickup. We'll confirm all payment
            details when your order is finalized.
          </p>
        </div>

        
        <div className="bg-[#F7F4E9] border border-[#D6D0C4] rounded-xl p-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C4873A] mb-3">
            04
          </p>
          <h2 className="text-2xl font-semibold text-[#3E2A1F] mb-4">
            Delivery & Pickup
          </h2>
          <p className="text-[#837668] leading-relaxed">
            Larger pieces are delivered directly to your home or location within
            the{" "}
            <span className="text-[#3E2A1F] font-medium">Indianapolis area</span>
            . Delivery cost depends on your location and will be confirmed at the
            time of order. You're also welcome to pick up your piece directly from
            the shop in Indianapolis, IN — just coordinate a time when you place your
            order.
          </p>
        </div>

        
        <div className="bg-[#F7F4E9] border border-[#D6D0C4] rounded-xl p-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C4873A] mb-3">
            05
          </p>
          <h2 className="text-2xl font-semibold text-[#3E2A1F] mb-4">
            Our Guarantee
          </h2>
          <p className="text-[#837668] leading-relaxed">
            We stand behind every piece we build. All Xylon furniture is
            guaranteed against defective materials and craftsmanship. If something
            isn't right, reach out within{" "}
            <span className="text-[#3E2A1F] font-medium">30 days of delivery</span>{" "}
            and we'll make it right — no hassle, no runaround.
          </p>
        </div>

        
        <div className="bg-[#3E2A1F] rounded-xl p-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C4873A] mb-3">
            06
          </p>
          <h2 className="text-2xl font-semibold text-[#F7F4E9] mb-4">
            Visit the Shop
          </h2>
          <p className="text-[#D6D0C4] leading-relaxed mb-6">
            You're welcome to come see the shop in person. We're located in Indianapolis. 
            Call ahead to schedule a visit and to make sure someone will be available to meet you.
          </p>
          <Link
            href="/Contact"
            className="inline-block bg-[#C4873A] text-[#F7F4E9] font-semibold px-8 py-3 rounded-full hover:bg-[#A67C52] transition"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </div>
  )
}