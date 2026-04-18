import Link from "next/link"

export default function Project() {
  return (
    <section className="bg-[#C4873A] py-9 md:py-20 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-semibold text-[#3E2A1F] mb-4">
        Ready to Build Something Unique?
      </h2>
      <p className="text-[#3E2A1F] text-sm md:text-lg  mb-8 md:mb-10 opacity-80">
        Reach out and let's talk about your project.
      </p>
      <Link
        href="/Contact"
        className="inline-block bg-[#3E2A1F] text-[#F7F4E9] font-semibold px-10 py-4 rounded-full hover:bg-[#2A1A0F] transition text-sm md:text-lg"
      >
        Start a Project
      </Link>
    </section>
  )
}