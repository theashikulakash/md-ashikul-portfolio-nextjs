import Navbar from "../components/navbar";
import Footer from "../components/footer";

const posts = [
  {
    title: "Building faster landing pages with Next.js",
    summary: "Tips for improving page speed, image handling, and overall UX.",
  },
  {
    title: "Design systems for modern portfolios",
    summary: "How to create reusable components and consistent styles.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#010409] text-white">
      <Navbar />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center ">
          <p className="text-sm uppercase tracking-[0.4em] text-sky-300">Blog</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Latest articles and ideas.</h1>
        </div>
        <div className="grid gap-4">
          {posts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-white/10 bg-gray-800/30 p-8">
              <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
              <p className="mt-3 text-slate-300">{post.summary}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
