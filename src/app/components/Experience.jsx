const Experience = () => {
  const items = [
    {
      role: "Frontend Engineer",
      company: "Creative Studio",
      period: "2024 - Present",
      detail: "Built responsive marketing sites and design systems using Next.js and Tailwind CSS.",
    },
    {
      role: "UI Developer",
      company: "Tech Agency",
      period: "2022 - 2024",
      detail: "Delivered high-quality interfaces and component libraries for web applications.",
    },
  ];

  return (
    <section className="p-8">
        <div className="space-y-6 rounded-3xl max-w-10/12 mx-auto  p-8">
            <div>
        <p className="text-sm uppercase tracking-[0.4em] text-sky-300 text-center">Experience</p>
        <h2 className="mt-2 text-3xl font-bold text-white text-center">Where I have worked.</h2>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.role} className="rounded-3xl bg-gray-800/30 p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xl font-semibold text-white">{item.role}</p>
                <p className="text-sm text-slate-400">{item.company}</p>
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.period}</p>
            </div>
            <p className="mt-4 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
        </div>
      
    </section>
  );
};

export default Experience;
