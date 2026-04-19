"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1100, once: true });
  }, []);

  return (
    <section className="bg-[#37261c] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#F7F4E9] font-(family-name:--font-playfair)">
          Built to Last Generations
        </h2>
      </div>

      <div data-aos="fade-right" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-[#F7F4E9] text-xl leading-relaxed">
          <p className="mb-6">
            We craft custom hardwood furniture using solid materials and
            time-tested techniques. Every piece is built with intention,
            designed to last, and made to be passed down.
          </p>
          <a
            href="/AboutUs"
            className="text-[#C4873A] font-medium hover:text-[#A67C52] transition"
          >
            Learn more →
          </a>
        </div>

        <div data-aos="fade-left">
          <img
            src="/Owner.png"
            className="w-full h-125 object-cover rounded-lg border-4 border-[#C4873A] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}