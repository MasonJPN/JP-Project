import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import StatsBar from "@/components/StatsBar";
import Featured from "@/components/Featured"
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
    
    <main className="grow">
      <Hero/>
     
      <StatsBar/>
      <Featured/>
       <About/>
       <Testimonials/>
      <Project/>
      
    </main>

    
    </div>
  );
}
