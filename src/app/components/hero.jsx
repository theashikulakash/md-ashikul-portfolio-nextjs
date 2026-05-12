const Hero = () => {
    return (
        <section className="space-y-6 rounded-3xl  p-8 shadow-2xl shadow-slate-950/30 flex md:flex-row justify-center
        mx-auto max-w-10/12 space-y-10 flex-col-reverse px-4 py-10 sm:px-6 lg:px-8 ">
            {/* section class-- border border-white/10 bg-slate-900/80 */}
            <div className="sm:w-10/12 md:w-6/12 flex flex-col text-justify justify-center gap-3 mx-auto">
                <h1 className="text-4xl  text-justify font-bold tracking-tight text-white sm:text-5xl">
                    Md Ashikul Islam
                </h1>
                <p className="text-sm  mb-4 uppercase tracking-[0.4em] text-cyan-300">Welcome to my portfolio</p>

                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                    I am a frontend engineer focused on clean code, elegant UI, and fast performance.
                    Explore my work, skills, and experience across this portfolio.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                    >
                        Contact Me
                    </a>
                    <a
                        href="/work"
                        className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
                    >
                        Download CV
                    </a>
                </div>
            </div>
            <div className="sm:w-10/12 md:w-6/12 flex flex-col text-justify justify-center mx-auto mb-3">
                <img src="/hero.png" alt="" />
            </div>

        </section>
    );
};

export default Hero;
