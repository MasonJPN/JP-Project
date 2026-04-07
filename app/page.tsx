import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import About from "@/components/About"
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
    
    <main className="flex-grow">
      <Hero/>
      <About/>
    </main>

    
    </div>
  );
}
