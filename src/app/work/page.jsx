import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Experience from "../components/Experience";
import Projects from "../components/projects";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#010409] text-white">
      <Navbar />
      <main className="mx-auto max-w-6xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-sky-300">Work</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Experience and projects.</h1>
        </div>
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
