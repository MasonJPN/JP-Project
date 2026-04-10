import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import StatsBar from "@/components/StatsBar";
import Featured from "@/components/Featured"
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
    
    <main className="flex-grow">
      <Hero/>
     
      <StatsBar/>
      <Featured/>
       <About/>
      <Project/>
      
    </main>

    
    </div>
  );
}
