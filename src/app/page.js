import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Stats from "./components/stats";
import About from "./components/about";
import Skills from "./components/skills";
import Experience from "./components/Experience";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#010409]  text-white">
      {/* bg-[#010409] */}
      <Navbar />
      <main >
        {/*main-- className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 lg:px-8" */}
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
