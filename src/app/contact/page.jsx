import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#010409] text-white">
      <Navbar />
      <main className="mx-auto max-w-5xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">Contact</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Say hello.</h1>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-slate-300">
          <p className="leading-8">
            Interested in working together? Send a message and I will get back to you soon.
          </p>
          <div className="mt-8 space-y-4 text-base text-white">
            <p>
              <span className="font-semibold">Email:</span> hello@example.com
            </p>
            <p>
              <span className="font-semibold">Location:</span> Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
