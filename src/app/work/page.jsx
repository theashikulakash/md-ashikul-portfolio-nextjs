import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Experience from "../components/Experience";
import Projects from "../components/projects";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#010409] text-white">
      <Navbar />
      <main className="mx-auto  space-y-10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-6xl mx-auto text-center">
          {/* <p className="text-sm uppercase tracking-[0.4em] text-sky-300">Work</p> */}
          <h1 className="text-4xl font-bold tracking-tight text-sky-300 sm:text-5xl">Work Experience and projects.</h1>
        </div>
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
