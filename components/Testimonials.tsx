"use client";
import { useEffect, useState } from "react";

const testimonials = [
  { name: "Sarah H.", item: "Custom Walnut Bookshelf", quote: "Worth every penny. The communication throughout the process was great and the finished bookshelf exceeded our expectations." },
  { name: "James R.", item: "Live-Edge Dining Table", quote: "The walnut dining table they built for us is absolutely stunning. Our family gathers around it every night — it already feels like an heirloom." },
  { name: "Emily T.", item: "Live-Edge Coffee Table", quote: "I wanted a live-edge coffee table that matched my space exactly. They nailed every detail — the craftsmanship is unlike anything I've seen in a store." },
  { name: "Mark D.", item: "Custom Maple Desk", quote: "The desk they built for my home office is perfect. Sturdy, beautiful, and exactly what I had in mind. Couldn't be happier." },
  { name: "Lisa K.", item: "Walnut Bed Frame", quote: "We get compliments on our bed frame every time someone visits. The quality is incredible and it was worth every penny." },
  { name: "Tom W.", item: "Cherry Wood Dining Chairs", quote: "Ordered four chairs to match our existing table. The color and grain matching was spot on — they look like they were always meant to be together." },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
        setAnimating(false);
      }, 900);
    }, 8000);
    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <div className="bg-[#F7F4E9]">
      <div className="text-center py-16">
        
        <h2 className="text-4xl md:text-5xl font-semibold text-[#37261c]">
          Customer Testimonials
        </h2>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-16 pb-16 transition-all duration-400"
        style={{
          opacity: animating ? 0 : 1,
          transform: animating ? "translateX(-30px)" : "translateX(0)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        {visible.map((t, i) => (
          <div key={i} className="bg-white border-l-4 border-l-[#C4873A] border border-[#d4c5b0] rounded-md p-6">
            <h2 className="text-[#C4873A] mb-3">❝</h2>
            <p className="text-[#37261c] leading-relaxed">{t.quote}</p>
            <div className="border-t border-[#d4c5b0] pt-4 mt-4">
              <p className="font-medium text-[#37261c]">{t.name}</p>
              <p className="text-sm text-[#8a7060]">{t.item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}