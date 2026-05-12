import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#010409] text-white">
      <Navbar />
      <main className="mx-auto max-w-5xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">About</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Learn more about my background.</h1>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-slate-300 shadow-xl shadow-black/20">
          <p className="leading-8">
            I am a web developer with a passion for building beautiful and usable interfaces.
            My work is defined by fast performance, logical structure, and polished visual design.
          </p>
          <p className="mt-4 leading-8">
            I enjoy working with teams and clients to create digital products that feel confident,
            modern, and easy to use across devices.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
