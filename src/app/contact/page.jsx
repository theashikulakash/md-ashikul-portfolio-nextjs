import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#010409] text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-sky-300">Contact</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Say hello.</h1>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gray-800/30 p-8 text-slate-300">
          <p className="leading-8">
            Interested in working together? Send a message and I will get back to you soon.
          </p>
          <div className="mt-8 space-y-4 text-base text-white">
            <p>
              <span className="font-semibold">Email:</span> <a href="mailto:theasshikulakash@gmail.com">theasshikulakash@gmail.com</a>
            </p>
            <p>
              <span className="font-semibold">Location:</span> Jessore, Bangladesh
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
