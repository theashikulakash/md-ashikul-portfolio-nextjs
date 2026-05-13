const About = () => {
  return (
    <section className="p-8 max-w-10/12 mx-auto">
      <div className="space-y-6 rounded-3xl  p-6 p-8">
        <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.4em] text-emerald-300 text-center">About me</p>
        <h2 className="text-3xl font-bold text-white text-center">A driven developer with a strong digital craft.</h2>
      </div>
      <p className=" text-slate-300 leading-8 text-center">
        I create polished, accessible, and high-performing web applications using the best modern tools. My focus is on thoughtful design, clear interactions, and user-first development.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-gray-800/30 p-5">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Location</p>
          <p className="mt-3 text-lg font-semibold text-white">Jessore, Bangladesh</p>
        </div>
        <div className="rounded-3xl bg-gray-800/30 p-5">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Specialty</p>
          <p className="mt-3 text-lg font-semibold text-white">Frontend, UI/UX, Next.js</p>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default About;
