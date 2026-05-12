const Projects = () => {
    const projects = [
        {
            title: "Portfolio Revamp",
            description: "Modern landing page with interactive sections and fast page loads.",
        },
        {
            title: "E-commerce UI",
            description: "A polished product experience built with reusable React components.",
        },
    ];

    return (
        <section className="p-8 ">
            <div className="max-w-10/12 mx-auto space-y-6 rounded-3xl  p-8">
                <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-sky-300 text-center">Projects</p>
                    <h2 className="mt-2 text-3xl font-bold text-white text-center">Selected work.</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    {projects.map((project) => (
                        <article key={project.title} className="rounded-3xl border border-white/10 bg-gray-800/30 p-6">
                            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                            <p className="mt-3 text-slate-300">{project.description}</p>
                        </article>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Projects;
