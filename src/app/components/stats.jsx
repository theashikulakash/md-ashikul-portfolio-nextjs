const Stats = () => {
  const items = [
    { label: "Projects", value: "24+" },
    { label: "Experience", value: "1 yrs" },
    { label: "Clients", value: "12+" },
    { label: "Skills", value: "38+" },
  ];

  return (
    <section className="  bg-[#0d1117]">
        {/* space-y-10 px-4 py-10*/}
        <div className="max-w-10/12 mx-auto grid gap-4  sm:grid-cols-2 lg:grid-cols-4 p-6 sm:px-6 lg:px-8 ">

      {items.map((item) => (
        <div key={item.label} className="rounded-3xl border border-white/10 bg-gray-800/30 p-6 text-center">
          <p className="text-4xl font-semibold text-white">{item.value}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
        </div>
      ))}
        </div>
    </section>
  );
};

export default Stats;
